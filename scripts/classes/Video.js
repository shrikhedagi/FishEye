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
            <article class="media-cards" data-id="${this._id}">
                <a class="media-cards__lightbox-link" href="assets/photographers/${this._photographerId}/video/${this._video}" aria-label="${this.title}, lightbox closeup view">
                    <video>
                        <source src="./assets/photographers/${this._photographerId}/video/${this._video}" type="video/mp4">
                    </video>
                </a>
                <footer class="media-cards__footer">
                    <h3 class="media-cards__title" title="${this.title}">
                        ${this.title}
                    </h3>
                    <div class="like-button">
                        <p class="like-button__number-of-likes">${this.likes}</p>
                        <button id="myLikeButton" class="like-button like-button__clicking sr-container toggleButton" aria-label="${this.likes} likes">
                            <span class="like-button__icon fas fa-heart" aria-hidden="true"></span>
                        </button>
                    </div>
                </footer>
                <time datetime="${this.date}"></time>
            </article>
                `;
    }

}

export default Video;