class PhotographerCard 
{
    // Add a constructor for the data
    constructor(photographer) 
    {
        this._name = photographer.name;
        this._id = photographer.id;
        this._location = `${photographer.city}, ${photographer.country}`;
        this._tagline = photographer.tagline;
        this._price = photographer.price;
        this._portrait = `assets/photographers/photographers-id-photos/${photographer.portrait}`;
    }   

    // Add article section in index.html body
    renderCard() 
    {
    const profilCard = `
        <article class="profil-card">
            <a class="profil-link" href="photographer.html?id=${this._id}" aria-label="${this._name} - Fisheye">
                <img 
                alt="${this._name} profil picture" 
                class="user-picture" 
                src="${this._portrait}" />
                <h2 tabindex="0" class="profil-card__name">
                    ${this._name}
                </h2>
            </a>
            <div role="paragraph" tabindex="0" class="thumbnail">
                <div class="thumbnail__location" lang="en">
                    ${this._location}
                </div>
                <div class="thumbnail__tagline">
                    ${this._tagline}
                </div>
                <div class="thumbnail__price">
                    ${this._price}€/jour
                </div>
            </div>
        </article>`;

        // Launch
        return profilCard;
    }
}

export default PhotographerCard;
