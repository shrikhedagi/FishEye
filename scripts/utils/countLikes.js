class TotalLikes{
    static init(){
        function countLikes(){

            // Likes under image
            // const counterElement = this.querySelector('.picture-card__counter-like-value');
            const countElement = this.previousElementSibling;
            const countValue = Number(countingElement.innerText);
        
            // Total likes in a card insert for a photographer
            const likesElement = document.querySelector('.photographer-counter__likes p');
            const likesValue = Number(LikesElement.textContent);
        
            
            increment(countElement, countValue);
            increment(likesElement, likesValue);
        }
        
        function increment(element, value){
            //Increment
            element.textContent = `${++value}`;
        }
        
        
        const likes = document.querySelectorAll('.picture-card__counter-like-action');
        likes.forEach(like => like.addEventListener('click', countLikes));
    }
}