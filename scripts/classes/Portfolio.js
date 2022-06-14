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
    displayGallery()
    {
        let html = ''
        this.all.forEach(media => 
        {
            html += media.render();
        })

        document.querySelector('#photographer-gallery').innerHTML = html
    }
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
    countTotalLikes() // Update total of likes
    {
        this.totalLikes = 0;
        this.all.forEach( (media) => 
            {
            this.totalLikes += media.likes
            });

            return this.totalLikes;

    }
    listenLike()
    {
        this.all.forEach( (media) => 
        {
            document.querySelector(`.media-cards[data-id="${media.id}"] .toggleButton`).addEventListener('click', ()=> 
            {
                media.toggle();
                this.countTotalLikes();
                document.querySelector('.card-insert__total-likes').innerHTML = this.totalLikes;
            });
        });
      
    }
    async start()
    {
        await this.hydrate();
        this.countTotalLikes();
        this.displayGallery();
        this.displayInsertCard();  
        this.listenLike();   
        
    }
     
}

export default Portfolio;

