class Media {

    constructor(data) 
    {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._description = data.description;
        this.hasBeenLiked = false; // Medias are not liked by default
        this.heartIcon = "far"; // Heart icon set to "fas" full heart

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
    reloadLikes()
    {
        document.querySelector(`.media-cards[data-id="${this._id}"] .like-button__number-of-likes`).innerText = this._likes;
    }
    dislike()
    {
        this._likes--;
        this.hasBeenLiked = false; 
        this.heartIcon = "far"; // Thin heart for dislike
        this.reloadLikes();
        document.querySelector(`.media-cards[data-id="${this._id}"] .toggleButton span`).classList.replace('fas', 'far')
    }
    like()
    {
        this._likes++;
        this.hasBeenLiked = true;
        this.heartIcon = "fas"; // Solid heart for like
        this.reloadLikes();
        document.querySelector(`.media-cards[data-id="${this._id}"] .toggleButton span`).classList.replace('far', 'fas')
    }
    toggle() 
    {
        if(this.hasBeenLiked) // If the user already liked the picture
        {
            this.dislike(); // the media is disliked
        } else {
            this.like(); // otherwise, it is liked
        }
    }
}

export default Media;