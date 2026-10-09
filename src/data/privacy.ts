import { vestigingen } from "./vestigingen";

const vestiging = vestigingen[0];

// Privacyverklaring voor de website. Beschrijft alleen wat de site zelf doet
// (contactformulier, hosting, kaart, lettertypen). Geen juridisch advies.
// Bevestigd door Simon (2026-10-09): vof, KvK 09030014, bewaartermijn 12
// maanden akkoord, geen klantkaart en geen digitale agenda.
// CookieFirst-paragrafen toegevoegd op 2026-10-09.
export const privacyBijgewerkt = "9 oktober 2026";

// Zolang dit leeg is, wordt de KvK-regel niet getoond.
const kvkNummer: string = "09030014";

export interface PrivacySectie {
  titel: string;
  paragrafen: string[];
  lijst?: string[];
}

export const privacySecties: PrivacySectie[] = [
  {
    titel: "Wie zijn wij?",
    paragrafen: [
      `Kapsalon Wiggers is verantwoordelijk voor de verwerking van persoonsgegevens via deze website. Je vindt ons aan de ${vestiging.adres}, ${vestiging.postcode} ${vestiging.plaats}. Je kunt ons bereiken op ${vestiging.telefoon} of via ${vestiging.email}.`,
      ...(kvkNummer ? [`Kapsalon Wiggers is een vennootschap onder firma, ingeschreven bij de Kamer van Koophandel onder nummer ${kvkNummer}.`] : []),
    ],
  },
  {
    titel: "Welke gegevens verwerken we?",
    paragrafen: [
      "Als je het contactformulier invult, ontvangen we je naam, je e-mailadres, je bericht en (als je dat invult) je telefoonnummer. Mail of bel je ons zelf, dan hebben we de gegevens die je daarbij deelt.",
      "Daarnaast verwerkt onze hostingpartij bij elk bezoek technische gegevens, zoals je IP-adres en het type browser. Dat is nodig om de website veilig en goed te laten werken.",
      "Geef je toestemming voor statistiekcookies, dan meten we met Google Analytics hoe de website wordt gebruikt, zoals welke pagina's worden bekeken. Zo kunnen we de website verbeteren.",
    ],
  },
  {
    titel: "Waarvoor gebruiken we je gegevens?",
    paragrafen: [
      "We gebruiken je gegevens alleen om je vraag te beantwoorden of een afspraak met je te maken. We sturen je geen nieuwsbrieven of reclame, en we verkopen je gegevens nooit aan anderen.",
    ],
  },
  {
    titel: "Hoe lang bewaren we je gegevens?",
    paragrafen: [
      "We bewaren berichten uit het contactformulier niet langer dan nodig. Uiterlijk 12 maanden nadat we je vraag hebben afgehandeld, verwijderen we ze.",
    ],
  },
  {
    titel: "Met wie delen we je gegevens?",
    paragrafen: [
      "Voor de website werken we met een paar externe diensten. Zij verwerken alleen de gegevens die nodig zijn voor hun taak.",
    ],
    lijst: [
      "Cloudflare: hosting van de website, beveiliging, anonieme bezoekersstatistieken en de controle tegen spam bij het contactformulier (Cloudflare Turnstile).",
      "Resend: verstuurt de berichten uit het contactformulier per e-mail naar ons.",
      "Google Maps: de kaart op de website. Google kan daarbij gegevens verzamelen en cookies plaatsen.",
      "Adobe Fonts: levert de lettertypen van de website. Daarbij wordt je IP-adres naar Adobe gestuurd.",
      "Google Analytics: anonieme statistieken over hoe de website wordt gebruikt. Alleen met je toestemming worden daarbij cookies geplaatst.",
      "CookieFirst: vraagt en registreert je toestemming voor cookies (zie hieronder).",
    ],
  },
  {
    titel: "Gegevens buiten Europa",
    paragrafen: [
      "Sommige van deze diensten zijn gevestigd in de Verenigde Staten. Gegevens worden dan alleen doorgegeven met passende waarborgen, zoals het EU-US Data Privacy Framework of de standaardcontractbepalingen van de Europese Commissie.",
    ],
  },
  {
    titel: "Cookies",
    paragrafen: [
      "We gebruiken Google Analytics en Google Maps. Die plaatsen alleen cookies als je daar toestemming voor geeft. Via de cookiemelding op de website bepaal je zelf welke cookies je toestaat. Welke cookies dat precies zijn, lees je in onze cookieverklaring.",
    ],
  },
  // Onderstaande drie secties komen uit de privacytekst die CookieFirst
  // aanlevert, omgezet naar je/jullie.
  {
    titel: "Toestemming voor het gebruik van cookies",
    paragrafen: [
      "Om je geldige toestemming te vragen voor het gebruik en de opslag van cookies, en om dat goed vast te leggen, gebruiken we het cookie consent management platform CookieFirst. Dat wordt geleverd door Digital Data Solutions BV, Plantage Middenlaan 42a, 1018 DH Amsterdam.",
      "Als je onze website bezoekt, wordt er verbinding gemaakt met de server van CookieFirst om je om toestemming te vragen. CookieFirst slaat daarna een cookie op in je browser, zodat alleen de cookies worden geactiveerd waarvoor je toestemming hebt gegeven en dat goed vastgelegd wordt. De gegevens worden bewaard tot de afgesproken bewaartermijn verloopt of tot je vraagt om ze te verwijderen. Wettelijke bewaartermijnen kunnen daarbij van toepassing blijven.",
      "We gebruiken CookieFirst om de wettelijk verplichte toestemming voor cookies te verkrijgen. De wettelijke basis daarvoor is artikel 6, lid 1, onder c van de Algemene Verordening Gegevensbescherming (AVG).",
    ],
  },
  {
    titel: "Verwerkersovereenkomst",
    paragrafen: [
      "We hebben een verwerkersovereenkomst gesloten met CookieFirst. Die is wettelijk verplicht en zorgt ervoor dat de gegevens van onze bezoekers alleen volgens onze instructies en volgens de AVG worden verwerkt.",
    ],
  },
  {
    titel: "Serverlogbestanden",
    paragrafen: [
      "Onze website en CookieFirst verzamelen en bewaren automatisch informatie in zogenaamde serverlogbestanden, die je browser automatisch naar ons doorstuurt. Het gaat om de volgende gegevens.",
    ],
    lijst: [
      "Je toestemmingsstatus of het intrekken van je toestemming",
      "Je geanonimiseerde IP-adres",
      "Informatie over je browser",
      "Informatie over je apparaat",
      "De datum en tijd waarop je onze website hebt bezocht",
      "De url van de pagina waarop je je toestemmingsvoorkeuren hebt opgeslagen of bijgewerkt",
      "Je locatie bij benadering op het moment dat je je voorkeur opsloeg",
      "Een uniek identificatienummer (UUID) van de bezoeker die op de cookiemelding heeft geklikt",
    ],
  },
  {
    titel: "Jouw rechten",
    paragrafen: [
      `Je hebt het recht om je gegevens in te zien, te laten aanpassen of te laten verwijderen. Ook kun je bezwaar maken tegen het gebruik ervan of vragen om je gegevens over te dragen. Stuur daarvoor een mail naar ${vestiging.email}. We reageren binnen een maand.`,
      "Ben je het niet eens met hoe we met je gegevens omgaan? Laat het ons eerst weten, dan zoeken we samen naar een oplossing. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.",
    ],
  },
  {
    titel: "Wijzigingen",
    paragrafen: [
      "We kunnen deze privacyverklaring aanpassen als de website verandert. De datum hieronder laat zien wanneer dat voor het laatst is gebeurd.",
    ],
  },
];
