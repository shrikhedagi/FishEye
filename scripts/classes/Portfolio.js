import MediaApi from "../Api/MediaApi.js";
import PhotographerApi from "../Api/PhotographerApi.js";

import MediaFactory from "./MediaFactory.js";

import PhotographerBanner from '../templates/PhotographerBanner.js'

import Photographer from './Photographer.js';

import ContactForm from "../utils/ContactForm.js";
class Portfolio 
{
    constructor (id) 
    {
        this.id = id;
        this.main = document.querySelector('main');
        this.mainContent = document.getElementById('photographer-gallery');
        this.mediasApi = new MediaApi('data/profilData.json');
        this.photographersApi = new PhotographerApi('data/profilData.json'); // Fetch data with API
        this.all = []; 
        this.totalLikes = 0;

        // Drop down elements
        this.button = document.getElementById("dropDownBtn");
        this.dropDownList = document.getElementById("myDropDownList");
        this.arrow = document.getElementById("chevron-down-icon");
        this.selectOptions =
        {
            likes: 'Popularité',
            date: 'Date',
            title: 'Titre'
        }
        this.nameOption = this.button.innerText.toLowerCase();
    }

    async hydrate() 
    {
        const mediasData = await this.mediasApi.getMedias();
        const items = mediasData.filter(item => item.photographerId === this.id)
        
        // Get media
        items.forEach(item => 
            {
                let media = new MediaFactory(item); // to sort everything out
                this.all.push(media)
            });

        const photographersData = await this.photographersApi.getPhotographersItems();
        const photographerItems = photographersData.find(photographer => photographer.id == this.id);
        this.photographer = new Photographer(photographerItems)

        // Get the whole banner (photographer info + contact form)
        const bannerSection = new PhotographerBanner(this.photographer)
        this.main.prepend(bannerSection.renderBanner())
        const form = new ContactForm(this.photographer);
        form.start();   

    }
    // Display media gallery 
    displayGallery()
    {
        let html = ''
        this.all.forEach(media => // Create a loop
        {
            html += media.render(); // render() is from Picture.js and Video.js
        })

        document.querySelector('#photographer-gallery').innerHTML = html
    }

    // Display card info (total likes, price)
    displayInsertCard() 
    {  
        let cardInsertInfos = `
            <div class="card-insert__counter sr-container">
                <span class="card-insert__total-likes">${this.totalLikes}</span>
                <span aria-hidden="true" class="card-insert__icon fas fa-heart"></span>
            </div>
            <div class="card-insert__price">
                <p>${this.photographer.price}€ / jour</p>
            </div>
        </aside>
            `;
        document.querySelector('.card-insert').innerHTML = cardInsertInfos;

    }

    // -------------------- LIKE BUTTON --------------------- //

    // Update the total count of likes
    countTotalLikes() 
    {
        this.totalLikes = 0;
        this.all.forEach( (media) => 
            {
            this.totalLikes += media.likes
            });

            return this.totalLikes;

    }

    // Add event listener for the number of likes
    listenLikes()
    {
        this.all.forEach( (media) => // Create a loop
        {
            document.querySelector(`.media-cards[data-id="${media.id}"] .toggleButton`).addEventListener('click', ()=> 
            {
                media.toggle();
                this.countTotalLikes();
                document.querySelector('.card-insert__total-likes').innerHTML = this.totalLikes;
            });
        });
      
    }

    // -------------------- DROP DOWN MENU --------------------- //

    // Show drop down menu options, while hide the button, when user clicks
    show()
    {
        this.arrow.style.WebkitTransform = "rotate(-180deg)"; // Rotate the chevron when click on the button
        this.button.setAttribute("aria-expanded", "true"); // Set aria-expanded for accessibility purpose
        this.dropDownList.style.display = "block"; // Show the options when clicked
        this.dropDownList.setAttribute("aria-activedescendant", this.nameOption);
        this.dropDownList.focus();
        
    }

    // Hide options and show button alone
    hide()
    {
        this.arrow.style.WebkitTransform = "rotate(0deg)"; // Chevron down when option list are hidden
        this.button.setAttribute("aria-expanded", "false");
        this.dropDownList.removeAttribute("aria-activedescendant");
        this.dropDownList.style.display = "none"; // Hide options
        this.button.focus();
    }

    // Event listener when clicked on one option in the drop down menu
    listenforOptions()
    {
        this.selectAllOptions.forEach((option) =>
        {
            option.addEventListener('click', () => // When clicked on an option
            {
                var order = option.dataset.this.id; // Set the order with dataset
                this.rebootOrder(order); // Reboot the order
                this.hide(); // Hide options
                this.sort(order); // Sort medias out
                this.displayGallery(); // Display the media gallery of the given photographer
                this.listenLikes(); // And listen again the likes (because listeners disappeared)
            });
        });
    }

    // Close drop down menu by clicking on main
    closeSort() {
    this.main.addEventListener("click", () =>
    {
        this.hide();
    });   
    }

    sortByTitle(a,b) 
    {
        const valueA = a.title;
        const valueB = b.title;
        if (valueA < valueB) {
            return -1;
          } else if (valueA === valueB) {
            return 0;
          } else {
            return 1;
          }
    }

    sortByDate(a,b) 
    {
        const valueA = new Date(a.date);
        const valueB = new Date(b.date);
        return valueB - valueA;
    }

    sortByPopularity(a,b) 
    {
        const valueA = parseInt(a.likes);
        const valueB = parseInt(b.likes);
        return valueB - valueA;
    }

    // To sort out the different options in the drop down menu: title, date and popularite (sets as default)
    sort(order)
    {
        switch (order)
        {
            // Case of sorting out medias by the most popular one (from the highest to the lowest number of likes)
            case 'Popularité':
                this.all = this.all.sort(this.sortByPopularity);

            // Case of sorting out medias by the 'date'
            case 'Date':
                this.all = this.all.sort(this.sortByDate);
                break;

            // Case of sorting out medias by the 'title'
            case 'Titre':
                this.all = this.all.sort(this.sortByTitle);
                break;
        
        }
    }

    // Keydown on event listener (Aceessibility)
    /* sortOnKeydown()
    {
        this.dropDownList.addEventListener("keydown", (event)=>
        {
            const currentOption = document.querySelector(".activeOption");
            let selectedOption;
            if(document.activeElement === this.dropDownList)
            {
                switch(event.key)
                {
                    case "Home":
                        selectedOption = this.dropDownList.firstElementChild;
                        break;

                    case "End":
                        selectedOption = this.dropDownList.lastElementChild;
                        break;
                    
                    case "ChevronDown":
                        selectedOption = currentOption.nextElementSibling;
                        if(selectedOption === null)
                        {
                            selectedOption = this.dropDownList.firstElementChild;
                        }
                        break;

                    case "ChevronUp":
                        selectedOption = currentOption.previousElementSibling;
                        if(selectedOption === null)
                        {
                            selectedOption = this.dropDownList.lastElementChild;
                        }
                        break;

                    case "Enter":
                        selectedOption = document.querySelector(".activeOption");
                        this.button.textContent = selectedOption.innerText;
                        this.hide();
                        this.displayGallery(selectedOption.innerText.toLowerCase());
                        break;
                    
                    case "Escape":
                        for (let i = 0; i < this.dropDownList.children.length; i++)
                            {
                                this.dropDownList.children[i].classList.remove("activeOption");
                            }
                            this.hide();
                            return;

                }
            }
            currentOption.classList.remove("activeOption");
            selectedOption.classList.add("activeOption");
            currentOption.setAttribute("aria-selected", "false");
            selectedOption.setAttribute("aria-selected", "true");
            this.dropDownList.setAttribute("aria-activedescendant", this,nameOption); 

        });
    } */

    /*
    keydownSort()
    {
        // Keydown event (Accessibility) 
        this.button.addEventListener("keydown", (event) => 
        {
            if (document.activeElement === this.button)
            {
                if(event.key === "ChevronDown" || event.key === "ChevronUp" || event.key === "Enter")
                {
                    event.preventDefault();
                    this.show();
                }
            }
        })
    } */
    
    listenSort()
    {   
        // Add event listener to roll down the options when clicked on the button
        this.button.addEventListener('click', (event) => // listen sort on click
        {
            event.stopPropagation();
            this.show(); // Show drop down menu options (popularity, title, date)
        })
    }

    // Display Drop Down Menu
    displaySort()
    {
        this.sortOptions.innerHTML = this.selectOptions("likes");
        this.listenSort();
        this.keydownSort();
        this.listenForOptions();
        this.closeSort();
    }

    // Update order when the option is clicked and activated
    rebootOrder(order)
    {
        document.querySelector(".wrapper .select").innerHTML = this.selectOptions(order);
    }

    // Async function to start the whole portfolio 
    async start()
    {
        await this.hydrate();
        this.countTotalLikes();
        this.displayGallery();
        this.displayInsertCard();  
        this.listenLikes(); 
        this.listenSort();   
    }
     
}

export default Portfolio;

