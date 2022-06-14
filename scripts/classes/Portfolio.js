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
        this.selectOptions =
        {
            likes: 'Popularite',
            date: 'Date',
            title: 'Titre'
        }
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
        const photographer = new Photographer(photographerItems)

        // Get the whole banner (photographer info + contact form)
        const bannerSection = new PhotographerBanner(photographer)
        this.main.prepend(bannerSection.renderBanner())
        const form = new ContactForm(photographer);
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
                <p>${this.price}€ / jour</p>
            </div>
        </aside>
            `;
        document.querySelector('.card-insert').innerHTML = cardInsertInfos;

    }
    // Display Drop Down Menu
    displaySort()
    {
        document.querySelector('.dropdown-content').innerHTML = this.selectOptions("likes");
        this.listenSort();
        this.listenForOptions();
    }

    // Hide options and show button alone
    hideOptions()
    {
        document.querySelector('#myDropDown-list').getElementsByClassName.display = "none"; // Hide options
        document.querySelector('#dropDownBtn').getElementsByClassName.display = "grid"; // Show button
    }

    // Listen when clicked on one option in the drop down menu
    listenforOptions()
    {
        document.querySelectorAll('.sort-options').forEach((option) =>
        {
            option.addEventListener('click', () => // When clicked on an option
            {
                let order = option.dataset.id;
                this.updateOrder(order); // Update the order
                this.hideOptions(); // Hide options
                this.sort(order); // Sort medias out
                this.displayGallery(); // Display the media gallery of the given photographer
                this.listenLikes(); // And listen again the likes (because they disappeared)
            });
        });
    }

    // Show drop down menu options, while hide the button
    showOptions()
    {
        document.querySelector('#dropDownBtn').getElementsByClassName.display = "grid"; // Show the options when clicked
        document.querySelector('#myDropDown-list').getElementsByClassName.display = "none"; // Hide the button when clicked 

    }

    // To sort out the different options in the drop down menu: title, date and popularite (sets as default)
    sort(order)
    {
        switch (order)
        {
            // Case of sorting out medias by the 'title'
            case 'title':
                this.all = this.all.sort((a, b) => a.title.localeCompare(b.title));
                break;

            // Case of sorting out medias by the 'date'
            case 'date':
                this.all = this.all.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            
            // Case of sorting out medias by the most popular one (from the highest to the lowest number of likes)
            default:
                this.all = this.all.sort((a,b) => b.likes - a.likes);
        }
    }

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

    // Add event listener tro roll down the options when clicked on the button
    listenSort()
    {
        document.querySelector('.dropDown__button').addEventListener('click', () => 
        {
            this.showOptions(); // Show drop down menu options (popularity, title, date)
        })
    }

    // Update order when activated
    updateOrder()
    {
        document.querySelector('.dropDown .dropDown-content').innerHTML = this.selectOptions(order);
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

