class CardInsert {
    constructor(photographer, likes){
        this.photographer = photographer
        this.likes = likes
    }
 
    createCardInsert(){

        const cardInsert = `
            <div class="card-insert__likes">
                <p>${this.likes}</p>
                <i class="fas fa-heart"></i>
            </div>
            <div class="card-insert__price">
                <p>${this.photographer.price}€ / jour</p>
            </div>
        `;
    
        return cardInsert;
    }
}