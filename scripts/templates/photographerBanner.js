import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import Photographer from "../models/Photographer.js";

class PhotographerBanner {
    constructor(photographer) {
        this._photographer = photographer
    }

    renderBanner() {
        const banner = document.createElement('section');
        banner.classList.add('photographer-banner');
        
        banner.innerHTML = `
        <div class="photographer-banner__headline">
            <h1 class="photographer-banner__name">${this._photographer.name}</h1>
            <p class="photographer-banner__location">${this._photographer.location}</p>
            <p class="photographer-banner__tagline">${this._photographer.tagline}</p>
        </div>
            
            <button type="button" class="button contact-button" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
            
            <img 
            class="user-picture photographer-banner__picture" 
            src="./assets/photographers/photographers-id-photos/${this._photographer.portrait}" 
            alt="${this._photographer.name}" 
            />`;

        return banner;
    }
}
export default PhotographerBanner;