import Api from './Api.js';

// Api to fetch medias
class MediaApi {
   
    constructor(url) {
        this._url = url
    }

    async getMedias() {
        const data = await Api.get(this._url)
        return data.media;
    }
}

export default MediaApi;