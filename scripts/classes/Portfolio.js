import MediaApi from "../Api/MediaApi.js";
import MediaFactory from "../factory/mediaFactory.js";

import PhotographerLikes from '../templates/photographerLikes.js';

// Create the Media Cards, pictures and videos
class Portfolio 
{
    constructor (id) 
    {
        this.id = id;
        this.mainContent = document.getElementById('photographer-gallery');
        this.mediasApi = new MediaApi('../data/profilData.json');
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
            document.querySelector('.media-cards[data-id:"${media.id}" .toggleLike]').addEventListener('click', ()=> 
            {
                media.toggle();
                this.countTotalLikes();
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

