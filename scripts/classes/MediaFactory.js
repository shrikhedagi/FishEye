import Video from "./Video.js";
import Picture from "./Picture.js";

class MediaFactory {

    constructor(data) {
        if (data.video) { // If the object media has the specified property return the picture
            return new Video(data)

        } else { // Otherwise return the video
            return new Picture(data);
        }
    }
}

export default MediaFactory;