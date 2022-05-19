class LikeButton {

    static init(currentPhotographer) {

        const likeButtons = document.querySelectorAll(".like-button");

        likeButtons.forEach( (likeButton) => {

            likeButton.addEventListener("click", (event) => {

                LikeButton.run(event, currentPhotographer);

            });

        });

    }