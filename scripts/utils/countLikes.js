class TotalLikes{
    static init(){
        function renderCountLikes(){

            // Likes under image
            // const countingElement = this.querySelector(".media-like-button__number-of-likes");
            const countingElement = this.previousElementSibling;
            const countingValue = Number(countingElement.innerText); // using function number() to count the value
        
            // Total likes in a card insert for a photographer
            const likesElement = document.querySelector('.card-insert__likes p');
            const likesValue = Number(likesElement.textContent); // using function number() to count the value
        
            
            increment(countingElement, countingValue);
            increment(likesElement, likesValue);
        }
        
        function increment(element, value){
            //Increment
            element.textContent = `${++value}`;
        }
        
        
        const countlikes = document.querySelectorAll('.card-insert__like-clicking');
        countlikes.forEach(countlike => countlike.addEventListener('click', renderCountLikes));
    }
}