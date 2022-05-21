import Api from '../Api/Api.js';
import PhotographerApi from '../Api/PhotographerApi.js';
import MediaApi from '../Api/MediaApi.js';
import MediaFactory from '../factory/mediaFactory.js';
import Photographer from '../models/Photographer.js';
import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import PhotographerBanner from '../templates/photographerBanner.js';
import MediaCard from '../templates/mediaCard.js'
import PhotographerLikes from '../templates/PhotographerLikes.js';


// Fetch photographer ID from URL
const id = getId();
// Create URL object and get URL Parameters
function getId() {
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const idString = urlParameters.get("id");
    
}

/* create the banner with APIs in photographer page */
export default class Banner {
    constructor(){
        this.mainContent = document.querySelector('main'); // Add in <main>
        this.photographersApi = new PhotographerApi('data/ProfilData.json'); // Fetch data with API
        this.mediasApi = new MediaApi('data/ProfilData.json'); // Fetch data with API
    }

    async getBannerInfos() {
        const photographersData = await this.photographersApi.getPhotographersItems()
        const mediasData = await this.mediasApi.getMedias()
        
        let totalLikes = 0;
        photographersData.map(photographer => new Photographer(photographer)).forEach(photographer => {

                if(id === photographer.id){ 

                    // Create Banner Section
                    const bannerSection = new PhotographerBanner(photographer)
                    this.mainContent.prepend(
                    bannerSection.renderBanner()    
                    )
                    
                    // Create number of Likes - boucle
                    mediasData.forEach(media => {

                        if(id === media.photographerId){
                            totalLikes += media.likes
                        }
                    })

                    // Create Number of likes rising
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








