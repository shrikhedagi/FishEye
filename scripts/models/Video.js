class Video {

    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._video = data.video;
        this._likes = data.likes;
        this._date = data.date;
        this._price = data.price;
        this._description = data.description;

    }

    get name(){
        return this._name
    }
    get id(){
        return this._id
    }
    get title(){
        return this._title
    }
    get image(){
        return this._image
    }
    get description(){
        return this._description
    }
    get photographerId(){
        return this._photographerId
    }
    get date(){
        return this._date
    }
    get likes(){
        return this._likes
    }
    get source(){
        return `
        <div class="media-cards__video">
            <a class="media-cards__lightbox-link" href="assets/photographers/${this._photographerId}/video/${this._video}" aria-label="${this.title}, lightbox closeup view">
                <video>
                    <source src="assets/photographers/${this._photographerId}/video/${this._video}" type="video/mp4">
                </video>
            </a>
        </div>
        `
    }

}

export default Video;