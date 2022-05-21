class PhotographerLikes {
    constructor (photographer, likes, media){
        this._photographer = photographer
        this._likes = likes
    }

    renderInsertInfosCard() {

        const cardInsertInfos = document.createElement('aside');
        cardInsertInfos.classList.add('card-insert')
        
        cardInsertInfos.innerHTML =`
        <div class="sr-only-container">
            <p id="card-insert__likes">${this.totalLikes}</p>
            <span class="card-insert__icon fas fa-heart"></span>
        </div>
        <div class="card-insert__price">
            <p>${this._photographer.price}€ / jour</p>
        </div>
            `;
        return cardInsertInfos; 
    }
}

export default PhotographerLikes;
