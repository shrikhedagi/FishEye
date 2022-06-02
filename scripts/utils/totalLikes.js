class TotalLikes
{
    static init()
    {
        function renderCountLikes()
        {

            // Likes under image
            const countingElement = this.previousElementSibling; // const countingElement = this.querySelector(".like-button__number-of-likes");
            
            const countingValue = Number(countingElement.innerText); // using function number() to count the value
        
            // Card insert's total likes for a photographer
            const likesElement = document.querySelector('.card-insert__counter span'); // Insert in HTML
            
            const likesValue = Number(likesElement.innerText); // using function number() to count the value
        
            increment(countingElement, countingValue);
            
            increment(likesElement, likesValue);
        }
        // To addition
        function increment(element, value)
        {
            // Adding on numbers as users click on like button
            element.textContent = `${++value}`; 
        }
 
        const countLikes = document.querySelectorAll('.like-button__clicking');
        
        countLikes.forEach(countLike => countLike.addEventListener('click', renderCountLikes));
    }

}
export default TotalLikes;
/*
window.addEventListener("load", () =>
{
document.getElementById("myLikeButton").addEventListener("click", doSomething);
});

    // The usual function
    function doSomething () 
    {
        // Attach click listener on page load
        // Detach click listener
        var span = document.getElementById("myLikeButton");
        span.removeEventListener("click", doSomething);

        // Extra
        span.innerHTML = "You clicked!";

        // Do your processing here
        alert("It's done!");

        // Re-enable after processing if you want 
        span.addEventListener("click", doSomething);
    } */

        