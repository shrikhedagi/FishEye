// import Api from '../Api/Api.js';

// Api to fetch medias
// class MediaApi extends Api {
   
    // constructor(url) {
        // super(url)
    // }

    // async getMedias() {
        // const data = await this.get()
        // return data.media;
    // }
// }

// export default MediaApi;

import Api from '../Api/Api.js';

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