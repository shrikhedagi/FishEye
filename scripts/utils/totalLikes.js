class TotalLikes{
    static init(){
        function renderCountLikes(){

            // Likes under image
            // const countingElement = this.querySelector(".media-like-button__number-of-likes");
            const countingElement = this.previousElementSibling;
            const countingValue = Number(countingElement.innerText); // using function number() to count the value
        
            // Total likes in a card insert for a photographer
            const likesElement = document.querySelector('.card-insert__likes p'); // Insert in HTML
            const likesValue = Number(likesElement.textContent); // using function number() to count the value
        
            
            increment(countingElement, countingValue);
            increment(likesElement, likesValue);
        }
        // To addition
        function increment(element, value){
            // Adding on numbers as users click on like button
            element.textContent = `${++value}`; 
        }
        
        
        const countLikes = document.querySelectorAll('.card-insert__like-clicking');
        countLikes.forEach(countLike => countLike.addEventListener('click', renderCountLikes));
      
    }
}
export default TotalLikes;