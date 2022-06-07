import MediaApi from "../Api/MediaApi.js";
import MediaFactory from "../factory/mediaFactory.js";

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
        document.querySelector('.card-insert__total-likes').innerHTML = this.countTotalLikes();

    }
    countTotalLikes()
    {
        let total = 0;
        this.all.forEach(media =>
        {
            total += media.likes;
        })

        return total;
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

