import { vestigingen } from "./vestigingen";
import { parkerenNotitie } from "./contact";

const vestiging = vestigingen[0];

// Alleen antwoorden die we echt weten: uit de oude website, de Google-reviews
// en wat Simon heeft bevestigd.
// TODO: bij John navragen en dan toevoegen:
// - Kan ik bij jullie pinnen (of alleen contant)?
// - Kan ik mijn afspraak verzetten of afzeggen, en hoe laat van tevoren?
// - Verkopen jullie de producten van L'ANZA en Gladjakkers ook?
export interface Vraag {
  vraag: string;
  antwoord: string;
}

export const faqSectie = {
  eyebrow: "Goed om te weten",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "Veelgestelde ",
  headingAccent: "vragen",
};

export const faq: Vraag[] = [
  {
    vraag: "Moet ik een afspraak maken?",
    antwoord: `Ja, we werken alleen op afspraak. Bel ons even op ${vestiging.telefoon} of stuur een mail naar ${vestiging.email}, dan plannen we een moment dat jou uitkomt.`,
  },
  {
    vraag: "Kunnen kinderen ook bij jullie terecht?",
    antwoord:
      "Zeker. We knippen iedereen van 0 tot 103 jaar. Voor de kleintjes staat er zelfs een zwarte Mercedes 63 AMG als kinderstoel, dan is knippen meteen een stuk leuker.",
  },
  {
    vraag: "Doen jullie ook bruidskapsels?",
    antwoord:
      "Ja, ook voor een bruidskapsel kun je bij ons terecht. Neem even contact op, dan bespreken we samen wat je wilt.",
  },
  {
    vraag: "Wat kost een knipbeurt?",
    antwoord:
      "Dat hangt af van de behandeling. Op de pagina Behandelingen & Tarieven vind je alle prijzen voor heren, dames en kinderen. Twijfel je wat je nodig hebt, dan geven we je vooraf altijd een duidelijke indicatie.",
  },
  {
    vraag: "Met welke producten werken jullie?",
    antwoord:
      "We werken o.a. met producten van L'ANZA en Gladjakkers. Vraag ons gerust welk product het beste bij jouw haar past.",
  },
  {
    vraag: "Kan ik parkeren bij de salon?",
    antwoord: `${parkerenNotitie} Je vindt ons aan de ${vestiging.adres} in ${vestiging.plaats}.`,
  },
];
