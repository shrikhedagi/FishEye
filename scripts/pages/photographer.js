async function getData() {
    let photographersData = await fetch("../data/profilData.json")
    return await photographersData.json();
}

// Create a function to get the current photographer (on click from ID)
function getCurrentPhotographer(photographersData) {
    let currentPhotographer = new Photographer();
    
    // Get the ID
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const idString = urlParameters.get("id");

    const photographerId = parseInt(idString);

    photographersData.photographers.forEach( (photographer) => {

        if (photographer.id === photographerId) {

            currentPhotographer.name = photographer.name;
            currentPhotographer.id = photographer.id;
            currentPhotographer.location = `${photographer.city}, ${photographer.country}`;
            currentPhotographer.tagline = photographer.tagline;
            currentPhotographer.price = photographer.price;
            currentPhotographer.picture = `assets/photographers/photographers-id-photos/${photographer.portrait}`;

        }

    });

    photographersData.media.forEach( (media) => {

        if (media.photographerId === photographerId) {

            if(currentPhotographer.media[0] === undefined) {

                currentPhotographer.media[0] = MediaFactories.createMediaCard(media);

            } else {

                currentPhotographer.media.push(MediaFactories.createMediaCard(media));

            }

        }

    });

    return currentPhotographer;
}

function displayBanner(currentPhotographer) {

    const photographerBannerSection = document.querySelector(".photographer-banner");
    const bannerDOM = currentPhotographer.createBanner();

    photographerBannerSection.innerHTML = bannerDOM;

}









