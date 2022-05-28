import BannerStart from '../classes/BannerStart.js';
import AllMedias from '../classes/AllMedias.js';

// Fetch photographer ID from URL
// Create URL object and get URL Parameters
let urlParameters = new URL(window.location.href);
const id = Number(urlParameters.searchParams.get("id"));


// Launch the entire banner with all its components (likes, single photographer info, contact form, etc.)
const launchBanner = new BannerStart(id)
launchBanner.getBannerInfos()

// Launch the media cards
const launchMedias = new AllMedias(id);
launchMedias.createAllMedias();












