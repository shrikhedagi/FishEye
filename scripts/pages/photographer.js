import Photographer from '../templates/photographerContents.js';
import Media from '../factory/mediaFactory.js';
import Video from "../models/Video.js";
import Picture from "../models/Picture.js";
import Portfolio from '../models/Portfolio.js';

// Fetch photographer ID from URL
const id = getId();

async function init() {

    // Fetch data of this photographer ID
    const infos = await getPhotographerInfo(id);
    const medias = await getPhotographerMedia(id);
    const photographer = new Photographer(infos, medias);

    // Display data
    photographer.display()
}
init(); 

// ***************************** SWE *****************************
async function getPhotographerInfo(id) {
    let photographersData = await fetch("../data/profilData.json");
    let data = await photographersData.json();

    return data.photographers.find(infos => infos.photographer_id = id);
}

async function getPhotographerMedia(id) {
    let photographersData = await fetch("../data/profilData.json")
    let data = await photographersData.json();

    return data.media.filter(infos => infos.photographerId == id);
}

// Create URL object and get URL Parameters
function getId() {
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const idString = urlParameters.get("id");
    const photographerId = parseInt(idString);
}










/* async function getPhotographersData() {
    let photographersData = await fetch("../data/profilData.json")
    return await photographersData.json();
}

// Create a function to get the actual photographer (on click from ID)
function getActualPhotographer(photographersData) {
    let actualPhotographer = new Photographer();
    
    // Get the ID
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const idString = urlParameters.get("id");
    const photographerId = parseInt(idString);

    photographersData.photographers.forEach( (photographer) => {

        if (photographer.id === photographerId) {

            actualPhotographer.name = photographer.name;
            actualPhotographer.id = photographer.id;
            actualPhotographer.location = `${photographer.city}, ${photographer.country}`;
            actualPhotographer.tagline = photographer.tagline;
            actualPhotographer.price = photographer.price;
            actualPhotographer.picture = `assets/photographers/photographers-id-photos/${photographer.portrait}`;

        }

    });

    photographersData.media.forEach( (media) => {

        if (media.photographerId === photographerId) {

            if(actualPhotographer.media[0] === undefined) {

                actualPhotographer.media[0] = MediaFactory.createMediaCard(media);

            } else {

                actualPhotographer.media.push(MediaFactory.createMediaCard(media));

            }

        }

    });

    return actualPhotographer;
}

function displayBanner(actualPhotographer) {

    const photographerBannerSection = document.querySelector(".photographer-banner");
    const bannerDOM = actualPhotographer.createBanner();

    photographerBannerSection.innerHTML = bannerDOM;

}

function displayMediaCards(actualPhotographer) {

    const photographerGallery = document.querySelector(".photographer-gallery");

    selectMenu.sortByPopularity(actualPhotographer.media);

    actualPhotographer.media.forEach( (media) => {

        const mediaCardDOM = actualPhotographer.getMediaCardDOM(media);

        photographerGallery.innerHTML += mediaCardDOM;

    });

}

function displayInsertInfos(actualPhotographer) {

    const photographerInsert = document.querySelector(".card-insert");

    const infosInsertDOM = actualPhotographer.getComplementaryInfosDOM();

    photographerInsert.innerHTML += infosInsertDOM;

}


async function displayData(actualPhotographer) {

    displayBanner(actualPhotographer);

    displayMediaCards(actualPhotographer);

    displayInsertInfos(actualPhotographer);
    
    return "finished";

}

async function init() {
    
    const photographersData = await getPhotographersData();
    
    const actualPhotographer = getActualPhotographer(photographersData);

    // Add the full name of the actual photographer in photographer.html
    document.title = `${actualPhotographer.name} - Fisheye`;

    if (await displayData(actualPhotographer) === "finished") {

        LikeButton.init(actualPhotographer);

    }

}

document.addEventListener("DOMContentLoaded", init); */











