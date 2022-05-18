class PhotographerBanner {
    // Add a constructor for the data
    constructor(photographer) {
        this._name = photographer.name;
        this._id = photographer.id;
        this._location = `${photographer.city}, ${photographer.country}`;
        this._tagline = photographer.tagline;
        this._price = photographer.price;
        this._picture = `assets/photographers/photographers-id-photos/${photographer.portrait}`;
    } 
  
    // Add section banner HTML content in photographer.html   
    createBanner() {
        const banner = `
            <div class="photographer-banner__headline">
                <h1 class="photographer-banner__name">${this._name}</h1>
                <p class="photographer-banner__location">${this._location}</p>
                <p class="photographer-banner__tagline">${this._tagline}</p>
            </div>
                
                <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
                
                <img 
                class="user-picture photographer-banner__picture" 
                src="./public/photographers/photographers-id-photos/${this._portrait}" 
                alt="${this._name}" 
                />`;

        // Launch
        return banner;
    }
}