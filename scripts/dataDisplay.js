/**
 * @param {string} - Photographer's data.
 */

export default class Photographer {
    // Add a constructor for the data
    constructor(photographer) {
        this._photographer = photographer
    }

    /**
     * 
     * @returns {HTMLElement} - Return the value.
     */

    // Add article section in index.html body
    getCardDOM() {
        const profilCard = document.createElement('article');
        profilCard.classList.add('profil-card');
        
        profilCard.innerHTML = `
            <a href="photographer.html?id=${this._photographer.id}" aria-label="${this._photographer.name} - Fisheye">
                <img 
                alt="${this._photographer.name}" 
                class="profil-card__picture" 
                src="${this._photographer.picture}" />
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
        return profilCard
    }
}
