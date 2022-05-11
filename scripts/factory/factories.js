import Picture from "../constructors/picture.js";
import Video from "../constructors/video.js";

export default class Factories {

    static mediaCreation(media) {
        if (media.hasOwnProperty("video")) { //If the object media has the specified property return the video
            return new Video(media.id, media.photographerID, media.title, media.video, media.likes, media.date, media.price, media.description);
        
        }else{
            return new Picture(media.id, media.photographerId, media.title, media.image, media.likes, media.date, media.price, media.description);
        }
    }
}
