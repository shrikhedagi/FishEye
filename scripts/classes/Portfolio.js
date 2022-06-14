import MediaApi from "../Api/MediaApi.js";
import PhotographerApi from "../Api/PhotographerApi.js";

import MediaFactory from "../factory/mediaFactory.js";

import PhotographerLikes from '../templates/PhotographerLikes.js';

// Create the Media Cards, pictures and videos
class Portfolio 
{
    constructor (id) 
    {
        this.id = id;
        this.mainContent = document.getElementById('photographer-gallery');
        this.mediasApi = new MediaApi('../data/profilData.json');
        this.photographersApi = new PhotographerApi('../../data/profilData.json'); // Fetch data with API
        this.all = []; 
        this.start();
        this.totalLikes = 0;
    }

    async hydrate() 
    {
        const mediasData = await this.mediasApi.getMedias();
        const items = mediasData.filter(item => item.photographerId === this.id)
        
        items.forEach(item => 
            {
                let media = new MediaFactory(item); // to sort everything out
                this.all.push(media)
            });
    }
    display()
    {
        let html = ''
        this.all.forEach(media => 
        {
            html += media.render();
        })

        document.querySelector('#photographer-gallery').innerHTML = html
    }
    displayTotal() 
    {
        const numberLikes = new PhotographerLikes(photographer, this.totalLikes);
        this.mainContent.prepend(numberLikes.renderInsertInfosCard())

    }
    countTotalLikes()
    {
        let total = 0;
        this.all.forEach( (media) => 
            {
            this.totalLikes += media.likes
            });

            return total;

    }
    listenLike()
    {
        this.all.forEach( (media) => 
        {
            document.querySelector(`.media-cards[data-id="${media.id}"] .toggleButton]`).addEventListener('click', ()=> 
            {
                media.toggle();
                this.countTotalLikes();
                this.displayTotal();
                document.querySelector('')
            });
        });
    }
    async start()
    {
        await this.hydrate();
        this.countTotalLikes();
        this.display();
        this.displayTotal();
        
        
    }
     
}

export default Portfolio;

