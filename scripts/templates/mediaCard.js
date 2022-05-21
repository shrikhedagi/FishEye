import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import Photographer from "../models/Photographer.js";

class MediaCards {
    constructor(media) {
        this._media = media
    }

    renderMediaCards() {
        const mediacard = `
        <section class="media-cards">
        <a href="${this._media.Source}" class="media-cards__lightbox-link" aria-label="${this._media.title}, lightbox closeup view">
        </a>
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

    return mediacard;
    }
}

export default MediaCard;