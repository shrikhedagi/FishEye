class MediaCards 
{
    constructor(media) 
    {
        this._media = media
    }

    renderMediaCards() 
    {

        let mediaCard = document.createElement('article');
        mediaCard.classList.add('media-cards');
        
        mediaCard.innerHTML = `
                ${this._media.source}
                <footer class="media-cards__footer">
                    <h3 class="media-cards__title" title="${this._media.title}">
                        ${this._media.title}
                    </h3>
                    <div class="like-button">
                        <p class="like-button__number-of-likes">${this._media.likes}</p>
                        <button id="myLikeButton" class="like-button like-button__clicking sr-container" aria-label="${this._media.likes} likes">
                            <span class="like-button__icon fas fa-heart" aria-hidden="true"></span>
                        </button>
                    </div>
                </footer>
            <time datetime="${this._media.date}"></time>
            `;

    return mediaCard;
    }
}

export default MediaCards;

