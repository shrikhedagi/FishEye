import Picture from "../constructors/picture.js";
import Video from "../constructors/video.js";

// To sort out whether it is a video or a picture
export default class MediaFactories {

    constructor(data) {
        if (data.video) { //If the object media has the specified property return the video
            return new Video(data)

        } else if (data.image) { // Otherwise return the picture
            return new Picture(data);

        } else {
            throw 'An error occured'
        }
    }
}

