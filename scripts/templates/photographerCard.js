export default class photographerCard {
    // Add a constructor for the data
    constructor(name, id, city, country, tagline, price, portrait) {
        this.name = name;
        this.id = id;
        this.location = `${city}, ${country}`;
        this.tagline = tagline;
        this.price = price;
        this.picture = `/assets/photographers/photographers-id-photos/${portrait}`;
    }

    // Add article section in index.html body
    renderCard() {
    const profilCard = `
        <article class="profil-card">

            <a href="photographer.html?id=${this.id}" aria-label="${this.name} - Fisheye">
                <img 
                alt="${this.name}" 
                class="user-picture" 
                src="${this.picture}" />
                <h2 class="profil-card__name">
                    ${this.name}
                </h2>
            </a>
            <div class="thumbnail">
                <p class="thumbnail__location" lang="en">
                    ${this.location}
                </p>
                <p class="thumbnail__tagline">
                    ${this.tagline}
                </p>
                <p class="thumbnail__price">
                    ${this.price}€/jour
                </p>
            </div>
        </article>`;

        // Launch
        return profilCard
    }
}
