// Api to fetch photographers
import Api from '../Api/Api.js';

class PhotographerApi extends Api {
    
    constructor(url) {
        super(url)
    }

    async getPhotographersItems() {
        const data = await this.get()
        return data.photographers;
    }
}

export default PhotographerApi;