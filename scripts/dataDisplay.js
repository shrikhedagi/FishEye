export default class Photographer {
    // Add a constructor for the datas
    constructor(name, id, city, country, tagline, price, portrait, media) {
        this.name = name;
        this.id = id;
        this.location = `${city}, ${country}`;
        this.tagline = tagline;
        this.price = price;
        this.portrait = `assets/photos/profil_Pictures/${portrait}`;
        this.media = [media];
    }

    // Add article section in index.html body
    getProfilDOM() {
        const profilCard = 
        `<article class="profil-card">
            <a href="./photographer.html?id=${this.id}" aria-label="${this.name} - Fisheye">
                <img alt="" class="profil-card__picture" src="./${this.portrait}" />
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

        return profilCard;
    }
}
