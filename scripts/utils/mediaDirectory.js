export default class mediaDirectory {

    static getMediaDirectory(currentPhotographer) {
        var firstName = currentPhotographer.name.match(/^\w+-?\w+(?!\w)/i);
        var mediaDirectoryName = firstName[0].toLowerCase();
    
        const mediaPath = `../assets/photographers/${mediaDirectoryName}`;

        return mediaPath;
    }

}