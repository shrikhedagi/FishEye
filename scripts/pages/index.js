import PhotographerCard from "../templates/PhotographerCard.js";

/* Using fetch() to get data for homepage */
async function getPhotographersData() 
{

    const photographers = fetch('data/profilData.json') // Correct path for local and gitPages

        .then(function (response) 
        {
            if (response.ok) 
            {
                return response.json();
            }
        })

        .then(function (data) 
        {
            return data.photographers;
        })

        .catch(function (errorMessage) 
        {
            console.log("Request failed ${errorMessage}!")
        });

    return photographers;

}

/* Display the photographers' cards in homepage */
function displayData(photographers) 
{
    const photographersSection = document.querySelector(".photographer_section");
    
    photographers.forEach((photographer) => 
    {

        const photographerModel = new PhotographerCard(photographer);
        const profilCardDOM = photographerModel.renderCard();
        photographersSection.innerHTML += profilCardDOM;

    });

}

async function init() 
{
    const photographers = await getPhotographersData();
    displayData(photographers);

};

// Fetching data when the page has loaded (github)
document.addEventListener("DOMContentLoaded", init);
