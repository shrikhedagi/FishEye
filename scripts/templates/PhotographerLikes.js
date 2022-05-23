import TotalLikes from "../utils/totalLikes.js";
class PhotographerLikes {
    constructor (photographer, likes, media){
        this._photographer = photographer
        this._likes = likes
    }

    renderInsertInfosCard() {

        const cardInsertInfos = document.createElement('aside');
        cardInsertInfos.classList.add('card-insert')
        
        cardInsertInfos.innerHTML =`
        <div class="card-insert__counter sr-container">
            <span id="card-insert__total-likes">${this._likes.totalLikes}</span>
            <span aria-hidden="true" class="card-insert__icon fas fa-heart"></span>
        </div>
        <div class="card-insert__price">
            <span>${this._photographer.price}€ / jour</span>
        </div>
            `;
        return cardInsertInfos; 
    }
}

export default PhotographerLikes;
