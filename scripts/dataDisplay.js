export default class photographerCard {
    // Add a constructor for the datas
    constructor(photographer) {
        this._photographer = photographer
    }

    // Add article section in index.html body
    getProfilDOM() {
        const profilCard = document.createElement('article');
        card.classList.add('profil-card');
        card.innerHTML = `
            <a href="./photographer.html?id=${this.id}" aria-label="${this.name} - Fisheye">
                <img alt="" class="profil-card__picture" src="assets/photos/profil_Pictures/${this._photographer.portrait}" />
                <h2 class="profil-card__name">
                    ${this._photographer.name}
                </h2>
            </a>
            <div class="thumbnail">
                <p class="thumbnail__location" lang="en">
                    ${this._photographer.location}
                </p>
                <p class="thumbnail__tagline">
                    ${this._photographer.tagline}
                </p>
                <p class="thumbnail__price">
                    ${this._photographer.price}€/jour
                </p>
            </div>
        </article>`;

        // Launch
        return profilCard;
    }
}
