import Api from '../Api/Api.js';
import PhotographerApi from '../Api/PhotographerApi.js';
import MediaApi from '../Api/MediaApi.js';
import MediaFactory from '../factory/mediaFactory.js';
import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import PhotographerBanner from '../templates/photographerBanner.js';

// Fetch photographer ID from URL
const id = getId();
// Create URL object and get URL Parameters
function getId() {
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const idString = urlParameters.get("id");
    
}

/* Get the banner with APIs in photographer page */
export default class Banner {
    constructor(){
        this.mainContent = document.querySelector('main');
        this.photographersApi = new PhotographerApi('data/ProfilData.json');
        this.mediasApi = new MediaApi('data/ProfilData.json');
    }

    async getBannerInfos() {
        const photographersData = await this.photographersApi.getPhotographersItems()
        const mediasData = await this.mediasApi.getMedias()
        
        let totalLikes = 0;
        photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                if(id === photographer.id){ 

                    // Create Banner Section
                    const bannerSection = new PhotographerContents(photographer)
                    this.mainContent.prepend(
                    bannerSection.renderBanner()    
                    )
                    
                    // Create Counting the number of Likes - Loop
                    mediasData.forEach(media => {

                        if(id === media.photographerId){
                            totalLikes += media.likes
                        }
                    })

                    // Create Number rising
                    const numberLikes = new PhotographerContents(photographer, totalLikes);
                    this.mainContent.prepend(
                        numberLikes.renderInsertInfosCard()
                    )
                }
            });
    }
}

const launchBanner = new Banner()
launchBanner.getBannerInfos()








