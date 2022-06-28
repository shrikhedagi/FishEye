class PhotographerBanner {
    constructor(all) {
        this._all = all
    }

    renderBanner() {
        const banner = document.createElement('section');
        banner.classList.add('photographer-banner');
        
        banner.innerHTML = `
        <div tabindex="0" class="photographer-banner__headline">
            <h1 tabindex="0" class="photographer-banner__name">${this._all.name}</h1>
            <p tabindex="0" class="photographer-banner__location">${this._all.location}</p>
            <p tabindex="0" class="photographer-banner__tagline">${this._all.tagline}</p>
        </div>
            
            <button type="button" class="button contact-button" id="contact-button" aria-label="Contact Me">Contactez-moi</button>
            
            <img 
            tabindex="0"
            class="user-picture photographer-banner__picture" 
            src="./assets/photographers/photographers-id-photos/${this._all.portrait}" 
            alt="${this._all.name} profil picture" 
            />`;

        return banner;
    }
}

export default PhotographerBanner;