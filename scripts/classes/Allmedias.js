import MediaApi from "../Api/MediaApi.js";
import MediaFactory from "../factory/mediaFactory.js";
import TotalLikes from "../utils/totalLikes.js";
import MediaCards from "./MediaCards.js";

// Create the Media Cards, pictures and videos
class AllMedias 
{
    constructor (id) 
    {
        this.id = id
        this.mainContent = document.getElementById('photographer-gallery');
        this.mediasApi = new MediaApi('data/profilData.json');
    }

    async createAllMedias() 
    {
        const mediasData = await this.mediasApi.getMedias();
        const items = mediasData.filter(item => item.photographerId === this.id)
        mediasData.map(media => new MediaFactory(media)).forEach(media => {

            if(this.id === media.photographerId) 
            {
                
                // Create Media Cards
                const createMedias = new MediaCards(media)
                this.mainContent.append(createMedias.renderMediaCards())  
            }
                TotalLikes.init();
                
        }); 

    }
}

export default AllMedias;

