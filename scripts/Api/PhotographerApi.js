import Api from './Api.js';

class PhotographerApi {
    
    constructor(url) {
        this._url = url
    }

    async getPhotographersItems() {
        const data = await Api.get(this._url)
        return data.photographers;
    }
}

export default PhotographerApi;

