class CardInsert {
    constructor(photographer, likes){
        this._photographer = photographer
        this._likes = likes
    }
 
    createCardInsert(){

        const cardInsert = document.createElement('aside');
        cardInsert.classList.add('card-insert');
    
        cardInsert.innerHTML = `
            <div class="photographer-counter__likes">
                <p>${this._likes}</p>
                <i class="fas fa-heart"></i>
            </div>
            <div class="photographer-counter__price">
                <p>${this._photographer.price}€ / jour</p>
            </div>
        `;
    
        return cardInsert;
    }
}