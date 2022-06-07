import BannerStart from '../classes/BannerStart.js';
import Portfolio from '../classes/Portfolio.js';

// Fetch photographer ID from URL
// Create URL object and get URL Parameters
let urlParameters = new URL(window.location.href);
const id = Number(urlParameters.searchParams.get("id"));


// Launch the entire banner with all its components (likes, single photographer info, contact form, etc.)
const launchBanner = new BannerStart(id)
launchBanner.getBannerInfos()

// Launch the media cards
const portfolio = new Portfolio(id);















