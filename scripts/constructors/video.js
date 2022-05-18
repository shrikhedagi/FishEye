export default class Video {

    constructor(data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.video = data.video;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.description = data.description;

    }

    get name(){
        return this.name
    }
    get id(){
        return this.id
    }
    get title(){
        return this.title
    }
    get image(){
        return this.image
    }
    get description(){
        return this.description
    }
    get photographerId(){
        return this.photographerId
    }
    get date(){
        return this.date
    }
    get likes(){
        return this.likes
    }

}