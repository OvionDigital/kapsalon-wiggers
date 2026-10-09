// CookieFirst-configuratie (cookiebanner/toestemming), ingesteld voor het domein
// kapsalonwiggers.nl in het CookieFirst-dashboard van Simon.
export const cookieFirstScript =
  "https://consent.cookiefirst.com/sites/kapsalonwiggers.nl-ceffdf58-94e1-4947-b6b0-65b7a14e5174/consent.js";

// Google Maps valt in CookieFirst onder de categorie "functional". Zolang daar
// geen toestemming voor is, toont de kaart deze melding.
export const kaartCategorie = "functional";
export const kaartMelding = {
  tekst:
    "De kaart komt van Google Maps, dat cookies kan plaatsen. Daarom tonen we hem pas als je functionele cookies accepteert.",
  knop: "Accepteer en toon de kaart",
  routeLink: "Of plan je route in Google Maps",
};

export const cookieverklaring = {
  intro:
    "Op deze pagina lees je welke cookies onze website gebruikt en waarvoor. Je toestemming beheer je via de cookiemelding.",
  paragrafen: [
    "Cookies zijn kleine bestanden die een website op je apparaat opslaat. We gebruiken Google Analytics om te zien hoe bezoekers de website gebruiken, en de kaart van Google Maps. Die kunnen cookies plaatsen, maar alleen als je daar toestemming voor geeft.",
    "Hieronder staat de actuele lijst met cookies. Die wordt automatisch bijgehouden door CookieFirst, het platform waarmee we je toestemming vragen en vastleggen.",
  ],
};

// Google Analytics 4. Laadt direct na CookieFirst, zodat Google Consent Mode
// (aan in het CookieFirst-dashboard) de standaardinstellingen al heeft gezet:
// zonder toestemming voor Performance slaat GA geen cookies op.
export const googleAnalyticsId = "G-ERJ9P3WN30";
