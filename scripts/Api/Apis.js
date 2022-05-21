class Api {
    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(this.url)
            .then(response => response.json())
            .then(response => response)
            .catch(error => console.log('an error occured', error))
    }
}

// Api to fetch photographers
class PhotographerApi extends Api {
    
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        const data = await this.get()
        return data.photographers;
    }
}

// Api to fetch medias
class MediaApi extends Api {
   
    constructor(url) {
        super(url)
    }

    async getMedias() {
        const data = await this.get()
        return data.media;
    }
}