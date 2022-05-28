// Api to fetch photographers
//import Api from '../Api/Api.js';

//class PhotographerApi extends Api {
    
    //constructor(url) {
        //super(url)
    //}

    //async getPhotographersItems() {
        //const data = await this.get()
        //return data.photographers;
    //}
//}

// export default PhotographerApi;

import Api from '../Api/Api.js';

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

