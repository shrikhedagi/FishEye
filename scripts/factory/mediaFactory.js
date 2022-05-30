import Video from "../models/Video.js";
import Picture from "../models/Picture.js";

class MediaFactory {

    constructor(data) {
        if (data.video) { // If the object media has the specified property return the video
            return new Video(data)

        } else if (data.image) { // Otherwise return the picture
            return new Picture(data);

        } else {
            throw 'An error has occured'
        }
    }
}

export default MediaFactory;