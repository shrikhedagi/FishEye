import Portfolio from '../classes/Portfolio.js';


// Fetch photographer ID from URL
// Create URL object and get URL Parameters
let urlParameters = new URL(window.location.href);
const id = Number(urlParameters.searchParams.get("id"));

// Launch the media cards
const portfolio = new Portfolio(id);
portfolio.start();















