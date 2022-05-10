import Photographer from "./dataDisplay.js";
import Factories from "./photographerFactory.js";

async function getProfilData() {
    const fetchData = fetch("../data/profilData.json")
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
    .then(function(fetchData) {
        return fetchData;
    })
    .catch(function(errorMessage) {
        console.log('Request failed ${errorMessage} !')
    })

    return fetchData;
}