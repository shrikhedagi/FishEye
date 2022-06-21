import Media from './Media.js';
class Video extends Media 
{

    constructor(data) 
    {
        super(data)

    }

    render()
    {
        return `
            <article class="media-cards" data-id=${this._id}>
                <button class="media-cards__lightbox-link" href="assets/photographers/${this._photographerId}/video/${this._video}" aria-label="${this.title}, lightbox closeup view">
                    <video alt="video: ${this._title}">
                        <source src="./assets/photographers/${this._photographerId}/video/${this._video}" type="video/mp4">
                    </video>
                </button>
                <footer class="media-cards__footer">
                    <h3 class="media-cards__title" title="${this.title}">
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
            <div class="lightBox__arrow lightBox__previous-arrow" data-id=${this._id}>
                <button class="fas fa-angle-left"></button>
            </div>
            <div class="close-slider">
                <div class="lightBox__content">
                    <figure class="lightBox__media-link">
                        <video controls autoplay alt="video: ${this._title}">
                            <source" src="./assets/photographers/${this._photographerId}/video/${this._video}" type="video/mp4">
                        </video>
                        <figcaption class="lightBox__title">${this.title}</figcaption>
                    </figure>
                </div>
                <div class="lightBox__closeBtn">
                    <button class="lightBox__close fas fa-times"></button>
                </div>
            </div>
            <div class="lightBox__arrow lightBox__next-arrow" data-id=${this._id}>
                <button class="fas fa-angle-right"></button>
            </div>
                `;
    }

}

export default Video;