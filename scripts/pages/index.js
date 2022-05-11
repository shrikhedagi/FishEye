import photographerCard from "../templates/photographerCard.js";

/* Using fetch() to get data for homepage */
async function getPhotographers() {

    const photographers = fetch('/data/profilData.json')

        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        })

        .then(function (data) {
            return data.photographers;
        })

        .catch(function (errorMessage) {
            console.log("Request failed ${errorMessage}!")
        });

    return photographers;

}

/* Display the photographers' cards in homepage */
function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {

        const photographerModel = new photographerCard(photographer.name, photographer.id, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.portrait);
        const userCardDOM = photographerModel.renderCard();
        photographersSection.innerHTML += userCardDOM;

    });

}

async function init() {
    const photographers = await getPhotographers();
    displayData(photographers);

};

// Fetching data when the page has loaded
document.addEventListener("DOMContentLoaded", init);
