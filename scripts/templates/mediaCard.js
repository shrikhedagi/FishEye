class mediaCard {
    constructor(media){
        this.media = [media];
    }
    
renderMediaCard(media){
    const mediaDirectoryPath = mediaDirectory.renderMediaDirectoryPath(this);
    let mediaOuterHTML = "";
    let mediaSource = "";

    // To sort out whether an object it's not an instance of a given constructor
    if (media instanceof Video) { // if the objet "media" instanceof the constructor "video" ==> return video

        mediaSource = `${mediaDirectoryPath}/videos/${media.video}`;
        mediaOuterHTML =` 
        <video aria-label="${media.description}">
            <source src="${mediaSource}" type="video/mp4"" />
            Votre navigateur ne prend pas en charge le contenu video en HTML5.
        </video>`;

    } else {

        mediaSource = `${mediaDirectoryPath}/pictures/${media.image}`;
        mediaOuterHTML = `<img src="${mediaSource}" alt="${media.description}" />`;

    }
    
    // Add the structure HTML in photographer.html
    const mediaCards = `
    <section class="media-cards">
        <a href="${mediaSource}" class="media-cards__lightbox-link" aria-label="${media.title}, lightbox closeup view">
            ${mediaOuterHTML}
        </a>
        <div class="media-cards-details">
            <h3 class="media-cards-details__title" title="${media.title}">
                ${media.title}
            </h3>
            <button class="like-button sr-only-container" aria-label="${media.likes} likes">
                <span class="media-like-button__number-of-likes">${media.likes}</span>
                <span class="media-like-button__icon fas fa-heart" aria-hidden="true"></span>
            </button>
        </div>
    </section>`;

        return mediaCards;
    }

}