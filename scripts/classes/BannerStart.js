import PhotographerApi from '../Api/PhotographerApi.js';
import MediaApi from '../Api/MediaApi.js';

import Photographer from '../models/Photographer.js';

import PhotographerBanner from './PhotographerBanner.js'
import PhotographerLikes from './PhotographerLikes.js';
import ContactForm from '../utils/contactForm.js';

/***** Create the banner with APIs in photographer page *****/
export default class BannerStart 
{
    constructor(id)
    {
        this.id = id
        this.totalLikes = 0;
        this.mainContent = document.querySelector('main');
        this.photographersApi = new PhotographerApi('../data/profilData.json'); // Fetch data with API
        this.mediasApi = new MediaApi('../data/profilData.json'); // Fetch data with API
    }

    async getBannerInfos() 
    {
        const photographersData = await this.photographersApi.getPhotographersItems()
        const mediasData = await this.mediasApi.getMedias()       
        const item = photographersData.find(photographer => photographer.id == this.id);
        console.log(item)
        const photographer = new Photographer(item)
        
        // Get Banner Section
        const bannerSection = new PhotographerBanner(photographer)
        this.mainContent.prepend(bannerSection.renderBanner())
        const form = new ContactForm();
        form.start();
                    
        // Get number of Likes - loop
        mediasData.forEach(media => 
        {

            if(this.id === media.photographerId)
            {
                this.totalLikes += media.likes
            }

        });

        // Get the number of likes rising
        const numberLikes = new PhotographerLikes(photographer, this.totalLikes);
        this.mainContent.prepend(numberLikes.renderInsertInfosCard())
    }

};
