class PhotographerBanner {
    // Add a constructor for the data
    constructor(photographer) {
        this.photographer = photographer
    } 
  
    // Add section banner HTML content in photographer.html   
    renderBanner() {
        const banner = `
            <div class="photographer-banner__headline">
                <h1 class="photographer-banner__name">${this.photographer.name}</h1>
                <p class="photographer-banner__location">${this.photographer.location}</p>
                <p class="photographer-banner__tagline">${this.photographer.tagline}</p>
            </div>
                
                <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
                
                <img 
                class="user-picture photographer-banner__picture" 
                src="./public/photographers/photographers-id-photos/${this.photographer.portrait}" 
                alt="${this.photographer.name}" 
                />`;

        // Launch
        return banner;
    }
}