import photographerCard from "../templates/photographerCard.js"; // Import data management for photographer card
import Factories from "../factory/factories.js"; //Import factory function
import mediaDirectory from "../utils/mediaDirectory.js"; // Import directoty for medias (video + pictures)

async function getProfilData() {
    const profilData = fetch("../data/profilData.json")
    
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(profilData) {
        return profilData;
    })
    .catch(function(errorMessage) {
        console.log('Request failed ${errorMessage} !')
    })

    return profilData;
}