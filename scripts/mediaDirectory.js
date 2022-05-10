export default class madiaDirectory {

    static getMediaDirectory(nowPhotographer) {
        var firstName = nowPhotographer.name.match(/^\w+-?\w+(?!\w)/i);
        var mediaDirectoryName = firstName[0].toLowerCase();
    
        const mediaPath = `../assets/photos/${mediaDirectoryName}`;

        return mediaPath;
    }

}