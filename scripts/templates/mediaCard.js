class mediaCard {
    constructor(media){
        this.media = [media];
    }
renderMediaCard(media){
    const mediaDirectoryPath = mediaDirectory.renderMediaDirectoryPath(this);
    let mediaOuterHTML = "";
    let mediaSource = "";
    
    
    const mediaCards = `
        <article class="media-cards">
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
    </article>`;

        return mediaCards;
    }
}