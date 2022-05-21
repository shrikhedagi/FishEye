import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import Photographer from "../models/Photographer.js";

class MediaCards {
    constructor(media) {
        this._media = media
    }

    renderMediaCards() {

        const mediaCard = document.createElement('article');
        mediaCard.classList.add('photographer-gallery');
        mediaCard.innerHTML =`
            <section class="photographer-gallery sr-container" aria-labelledby="header for photographer's photos and videos gallery">
            <h2 class="sr-container__gallery" id="photographer-gallery__header">Gallerie photos et videos des travaux du photographe</h2>
                ${this._media.Source}
                
                <div class="media-cards-details">
                    <h3 class="media-cards-details__title" title="${this._media.title}">
                        ${this._media.title}
                    </h3>
                    <button class="like-button sr-only-container" aria-label="${this._media.likes} likes">
                        <span class="media-like-button__number-of-likes">${this._media.likes}</span>
                        <span class="media-like-button__icon fas fa-heart" aria-hidden="true"></span>
                    </button>
                </div>
            </section>
            <time datetime="${this._media.date}"></time>
            `;

    return mediaCard;
    }
}

export default MediaCards;