import Api from '../Api/Api.js';

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

export default MediaApi;