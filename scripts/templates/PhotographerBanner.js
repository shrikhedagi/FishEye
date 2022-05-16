export default class photographerInfo {
    // Add a constructor for the data
    constructor(name, id, city, country, tagline, price, portrait) {
        this.name = name;
        this.id = id;
        this.location = `${city}, ${country}`;
        this.tagline = tagline;
        this.price = price;
        this.picture = `assets/photographers/photographers-id-photos/${portrait}`;
    } 
  
    // Add section banner HTML content in photographer.html   
    renderBanner() {
        const banner = `
            <div class="photographer-banner__headline">
                <h1 class="photographer-banner__name">${this.name}</h1>
                <p class="photographer-banner__location">${this.location}</p>
                <p class="photographer-banner__tagline">${this.tagline}</p>
            </div>
                
                <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
                
                <img 
                class="user-picture photographer-banner__picture" 
                src="./public/photographers/photographers-id-photos/${this.picture}" 
                alt="${this.name}" 
                />`;

        //LAUNCH
        return banner;
    }
}