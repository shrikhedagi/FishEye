import Video from "../models/Video.js";
import Picture from "../models/Picture.js";

class PhotographerContents {
    constructor(photographer, media, likes) {
        this._photographer = photographer;
        this._media = [media];
        this._likes = likes;
    }

    renderBanner() {
        return `
        <div class="photographer-banner__headline">
            <h1 class="photographer-banner__name">${this._photographer.name}</h1>
            <p class="photographer-banner__location">${this._photographer.location}</p>
            <p class="photographer-banner__tagline">${this._photographer.tagline}</p>
        </div>
            
            <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
            
            <img 
            class="user-picture photographer-banner__picture" 
            src="./public/photographers/photographers-id-photos/${this._photographer.portrait}" 
            alt="${this._photographer.name}" 
            />`;
    }

    renderMediaCards() {
        return `
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
    }

    renderTotalLikes() {
        var totalLikes = 0;
        var numberLikesMedia = [];

        const decreases = (previousValue, actualValue) => previousValue + actualValue;

        this.media.forEach( (media) => {

            numberLikesMedia.push(media.likes);

        });
        
        totalLikes = numberLikesMedia.reduce(decreases);

        return totalLikes;
    }

    renderInsertInfosCard() {
        this._totalLikes = this.renderTotalLikes();

        const cardInsertInfos = `
        <div class="sr-only-container">
            <p id="card-insert__likes">${this.totalLikes}</p>
            <span class="card-insert__icon fas fa-heart"></span>
        </div>
        <div class="card-insert__price">
            <p>${this._photographer.price}€ / jour</p>
        </div>
            `;
        return cardInsertInfos; 
    }

}

export default PhotographerContents;