export default class Picture {

    constructor(id, photographerId, title, image, likes, date, price, description) {
        this.likes = likes;
        this.date = date;
        this.price = price;
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.description = description;

    }

}