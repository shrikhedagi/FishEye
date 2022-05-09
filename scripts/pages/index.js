import Photographer from "../dataManagement/photographers.js"

/* Using fetch() to get data for homepage */
async function getPhotographers() {
    
    const photographers = fetch('data/profilData.json')
        
        .then(function(result) {
            if(result.ok) {
                return result.json();
            }
        })

        .then(function(retrieveProfil) {
            return retrieveProfil.photographers;
        })

        .catch(function(errorMessage) {
            console.log("Retrieving information regarding photographers have failed ${errorMessage}.")
        });  
    

return photographers;
    
}

/* Display the photographers' cards in homepage */
async function displayData(photographers) {

    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        
        const photographerModel = new photographer(photographer.name, photographer.id, photographer.city, photographer.country, photographer.tagline, photographer.price, photographer.portrait);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.innerHTML += userCardDOM;
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

document.addEventListener("DomContentLoaded",init);
