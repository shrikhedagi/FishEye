import photographerInfo from "../templates/photographerBanner.js"; // Import data management for photographer banner

async function getProfilData() {
    const profilData = fetch("/data/profilData.json")
    
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(data) {
        return data;
    })
    .catch(function(errorMessage) {
        console.log('Request failed ${errorMessage} !')
    });

    return profilData;
}


