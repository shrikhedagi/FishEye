class Video 
{

    constructor(data) 
    {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._description = data.description;

    }
  
    get id()
    {
        return this._id
    }
    get title()
    {
        return this._title
    }
    get image()
    {
        return this._image
    }
    get description()
    {
        return this._description
    }
    get photographerId()
    {
        return this._photographerId
    }
    get date()
    {
        return this._date
    }
    get likes()
    {
        return this._likes
    }
    like()
    {
        this._likes++;
    }
    dislike()
    {
        this._likes--;
    }
    render()
    {
        return `
            <article class="media-cards">
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
                        <button id="myLikeButton" class="like-button like-button__clicking sr-container" aria-label="${this.likes} likes">
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