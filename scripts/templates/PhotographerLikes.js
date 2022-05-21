class PhotographerLikes {
    constructor (photographer, likes, media){
        this._photographer = photographer
        this._likes = likes
        this._media = [media]
    }

    renderTotalLikes() {
        let totalLikes = 0;
        let numberLikesMedia = [];

        const decreases = (previousValue, actualValue) => previousValue + actualValue;

        this.media.forEach( (media) => {

            numberLikesMedia.push(media.likes);

        });
        
        totalLikes = numberLikesMedia.reduce(decreases);

        return totalLikes;
    }

    renderInsertInfosCard() {
        this._totalLikes = this.renderTotalLikes();

        const cardInsertInfos = `
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
