async function getPhotographersData() {
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

function displayMediaCards(currentPhotographer) {

    const photographerGallery = document.querySelector(".photographer-gallery");

    SelectMenu.sortByPopularity(currentPhotographer.media);

    currentPhotographer.media.forEach( (media) => {

        const mediaCardDOM = currentPhotographer.getMediaCardDOM(media);

        photographerGallery.innerHTML += mediaCardDOM;

    });

}

function displayInsertInfos(currentPhotographer) {

    const photographerInsert = document.querySelector(".card-insert");

    const infosInsertDOM = currentPhotographer.getComplementaryInfosDOM();

    photographerInsert.innerHTML = infosInsertDOM;

}


async function displayData(currentPhotographer) {

    displayBanner(currentPhotographer);

    displayMediaCards(currentPhotographer);

    displayInsertInfos(currentPhotographer);
    
    return "finished";

}

async function init() {
    
    const photographersData = await getPhotographersData();
    
    const currentPhotographer = getCurrentPhotographer(photographersData);

    // Add the full name of the current photographer in photographer.html
    document.title = `${currentPhotographer.name} - Fisheye`;

    if (await displayData(currentPhotographer) === "finished") {

        LikeButton.init(currentPhotographer);

    }

}

document.addEventListener("DOMContentLoaded", init);











