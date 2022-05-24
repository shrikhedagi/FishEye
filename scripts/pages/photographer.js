import PhotographerApi from '../Api/PhotographerApi.js';
import MediaApi from '../Api/MediaApi.js';
import MediaFactory from '../factory/mediaFactory.js';

import Photographer from '../models/Photographer.js';
import Picture from '../models/Picture.js';
import Video from '../models/Video.js';


import PhotographerBanner from '../classes/photographerBanner.js';
import MediaCards from '../classes/mediaCard.js'
import PhotographerLikes from '../classes/PhotographerLikes.js';
import ContactForm from '../classes/contactForm.js';

import TotalLikes from "../utils/totalLikes.js";

// Fetch photographer ID from URL
// Create URL object and get URL Parameters
let urlParameters = new URL(window.location.href);
const id = Number(urlParameters.searchParams.get("id"));


/***** Create the banner with APIs in photographer page *****/
export default class Banner 
{
    constructor(){
        this.mainContent = document.querySelector('main'); // Add in <main>
        this.photographersApi = new PhotographerApi('data/ProfilData.json'); // Fetch data with API
        this.mediasApi = new MediaApi('data/ProfilData.json'); // Fetch data with API
    }

    async getBannerInfos() 
    {
        const photographersData = await this.photographersApi.getPhotographersItems()
        const mediasData = await this.mediasApi.getMedias()       
        let totalLikes = 0;

        photographersData.map(photographer => new Photographer(photographer)).forEach(photographer => 
            {

                if(id === photographer.id)
                { 

                    // Get Banner Section
                    const bannerSection = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    bannerSection.renderBanner()    
                    )
                    
                    // Get number of Likes - loop
                    mediasData.forEach(media => 
                        {

                        if(id === media.photographerId)
                        {
                            totalLikes += media.likes
                        }
                    })

                    // Get the number of likes rising
                    const numberLikes = new PhotographerLikes(photographer, totalLikes);
                    this.mainContent.prepend(
                        numberLikes.renderInsertInfosCard()
                    )
                }
            });
    }
}

const launchBanner = new Banner()
launchBanner.getBannerInfos()

// Create the Media Cards, pictures and videos

class AllMedias 
{
    constructor () 
    {
        this.mainContent = document.getElementById('photographer-gallery');
        this.mediasApi = new MediaApi('data/profilData.json');
    }

    async createAllMedias() 
    {

        const mediasData = await this.mediasApi.getMedias();

        mediasData.map(media => new MediaFactory(media)).forEach(media => {

            if(id === media.photographerId) 
            {
                
                // Create Media Cards
                const createMedias = new MediaCards(media)
                this.mainContent.append(
                    createMedias.renderMediaCards()
                )  
            }
                TotalLikes.init();
                
        }); 

    }
}

const launchMedias = new AllMedias();
launchMedias.createAllMedias();

// Create contact form
const formOverlay = document.querySelector('.formOverlay');
const focusableElementsModal = document.querySelectorAll(
    "#close, #firstname, #lastname, #email, #message, #submit"
  );
const firstElement = focusableElementsModal[0];

/***** Open Contact Form *****/
function openForm() 
{
    formOverlay.style.display = "flex";
    firstElement.focus();
}

/***** Close Contact Form *****/
function closeForm() 
{
    formOverlay.style.display = "none";
    document.querySelector('main').focus();
}








