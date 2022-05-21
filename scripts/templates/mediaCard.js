class MediaCards {
    constructor(media) {
        this._media = media
    }

    renderMediaCards() {

        let mediaCard = document.createElement('section');
        mediaCard.classList.add('photographer-gallery');
        
        mediaCard.innerHTML = `
                ${this._media.source}
                <footer class="media-cards-details">
                    <h3 class="media-cards-details__title" title="${this._media.title}">
                        ${this._media.title}
                    </h3>
                    <button class="like-button sr-only-container" aria-label="${this._media.likes} likes">
                        <span class="media-like-button__number-of-likes">${this._media.likes}</span>
                        <span class="media-like-button__icon fas fa-heart" aria-hidden="true"></span>
                    </button>
                </footer>
            <time datetime="${this._media.date}"></time>
            `;

    return mediaCard;
    }
}

export default MediaCards;

