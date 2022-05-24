import TotalLikes from "../utils/totalLikes.js";
class PhotographerLikes 
{
    constructor (photographer, likes, media)
    {
        this._photographer = photographer
        this._likes = likes
    }

    renderInsertInfosCard() 
    {

        const cardInsertInfos = document.createElement('aside');
        cardInsertInfos.classList.add('card-insert')
        
        cardInsertInfos.innerHTML =`
        <div class="card-insert__counter sr-container">
            <span class="card-insert__total-likes">${this._likes}</span>
            <span aria-hidden="true" class="card-insert__icon fas fa-heart"></span>
        </div>
        <div class="card-insert__price">
            <p>${this._photographer.price}€ / jour</p>
        </div>
            `;
        return cardInsertInfos; 
    }
}

export default PhotographerLikes;
