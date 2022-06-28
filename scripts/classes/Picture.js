import Media from './Media.js';

class Picture extends Media
{

    constructor(data) 
    {
        super(data)

    }

    render()
    {
        return `
            <article class="media-cards" data-id="${this._id}">
                <button class="media-cards__lightbox-link" href="assets/photographers/${this._photographerId}/photo/${this._image}" aria-label="${this.title}, lightbox closeup view">
                    <img class="lightbox-link" src="./assets/photographers/${this._photographerId}/photo/${this._image}" alt="Photographie - ${this._title} - ${this._description}">
                </button>
                <footer class="media-cards__footer">
                    <h3 tabindex="0" class="media-cards__title" title="${this.title}">
                        ${this.title}
                    </h3>
                    <div class="like-button">
                        <p class="like-button__number-of-likes">${this.likes}</p>
                        <button id="myLikeButton" class="like-button like-button__clicking sr-container toggleButton" aria-label="${this.likes} likes">
                            <span class="like-button__icon ${this.heartIcon} fa-heart"></span>
                        </button>
                    </div>
                </footer>
                <time datetime="${this.date}"></time>
            </article>
            `;
    }

    renderLightBox()
    {
        return `
            <figure class="lightBox__media-link">
                <img tabindex="0" class="lightBox__img lightbox-link" src="./assets/photographers/${this._photographerId}/photo/${this._image}" alt="Photographie - ${this._title} - ${this._description}"> 
                <figcaption tabindex="0" class="lightBox__title">${this.title}</figcaption>
            </figure>
                `;
    }

}

export default Picture;