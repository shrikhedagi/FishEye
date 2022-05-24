class Picture 
{

    constructor(data) 
    {
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
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
    get source()
    {
        return `<a class="media-cards__lightbox-link" href="assets/photographers/${this._photographerId}/photo/${this._image}" aria-label="${this.title}, lightbox closeup view">
                    <img src="./assets/photographers/${this._photographerId}/photo/${this._image}" alt="Photographie - ${this._title}">
                </a>
                `
    }

}

export default Picture;