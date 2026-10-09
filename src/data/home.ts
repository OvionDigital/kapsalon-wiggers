import { categorieen } from "./behandelingen";
import { formatPrijs } from "../lib/prijzen";

export const intro = {
  eyebrow: "Sinds 1932",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "Vakmanschap dat je ",
  headingAccent: "voelt",
  paragrafen: [
    "Kapsalon Wiggers begon in 1932 in Kilder en is inmiddels al bijna een eeuw onderdeel van de streek. Die geschiedenis merk je nog steeds: we werken met vakmanschap dat van generatie op generatie is doorgegeven, in een salon in Wehl waar je je meteen op je gemak voelt.",
    "We nemen de tijd voor wat jij wilt, of je nou al jaren bij ons komt of voor het eerst binnenstapt. Voor heren, dames en kinderen, van klassieke coupes tot een frisse nieuwe stijl.",
  ],
};

export const behandelingenSectie = {
  eyebrow: "Voor iedereen",
};

// De laagste vaste prijs van alle "Knippen…"-regels in een categorie, zodat
// de vanaf-prijzen op de homepage altijd uit behandelingen.ts komen.
function vanafPrijsKnippen(categorieId: string) {
  const prijzen = categorieen
    .find((categorie) => categorie.id === categorieId)
    ?.behandelingen.filter((b) => b.naam.startsWith("Knippen"))
    .map((b) => b.prijs)
    .filter((prijs): prijs is number => typeof prijs === "number");
  if (!prijzen?.length) {
    throw new Error(`Geen knipprijs gevonden voor categorie "${categorieId}"`);
  }
  return formatPrijs(Math.min(...prijzen));
}

// Elke kaart licht één concrete behandeling per doelgroep uit.
// TODO: bij de klant checken of "Knippen" per doelgroep inderdaad de
// populairste behandeling is die we hier willen tonen.
// TODO: placeholder-foto's vervangen door echte portretten van een man, een
// vrouw en een kind (afbeelding-sleutel = heren/dames/kinderen).
export const behandelingen = [
  {
    doelgroep: "Heren",
    behandeling: "Knippen",
    prijs: vanafPrijsKnippen("heren"),
    vanaf: true,
    afbeelding: "heren",
  },
  {
    doelgroep: "Dames",
    behandeling: "Knippen",
    prijs: vanafPrijsKnippen("dames"),
    vanaf: true,
    afbeelding: "dames",
  },
  {
    doelgroep: "Kinderen",
    behandeling: "Knippen",
    prijs: vanafPrijsKnippen("kinderen"),
    vanaf: true,
    afbeelding: "kinderen",
  },
];

export const reviewsSectie = {
  eyebrow: "Wat klanten zeggen",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "Reviews die voor zich ",
  headingAccent: "spreken",
  paragraaf:
    "Bijna een eeuw kappen doe je niet zonder tevreden klanten. Dit is wat ze over ons zeggen.",
};

// Echte Google-reviews: een selectie van de meest recente 5-sterrenreviews
// met tekst, overgenomen op 2026-10-09. Alleen spelling en interpunctie zijn
// licht rechtgezet. Geen profielfoto's: rechtstreeks van Google laden maakt
// de site niet meer trackervrij, dus de slider toont initialen.
export const uitgelichteReviews = [
  {
    naam: "Harry Betcke",
    sterren: 5,
    tekst:
      "Kapsters knippen erg goed en gebruiken L'ANZA-producten, die erg goed voor mijn haar zijn.",
  },
  {
    naam: "Tom van Hal",
    sterren: 5,
    tekst: "Een hele goede en gezellige kapsalon.",
  },
  {
    naam: "Nick Beumer",
    sterren: 5,
    tekst: "Heel fijne kapper.",
  },
  {
    naam: "Gerard Baars",
    sterren: 5,
    tekst: "Prima kapper. Mooie zaak, goeie service.",
  },
  {
    naam: "Manfred Goorman",
    sterren: 5,
    tekst: "Geweldig modern en zeer vriendelijk allemaal. En altijd gezellig.",
  },
  {
    naam: "Renate Kruis",
    sterren: 5,
    tekst:
      "Bij Kapsalon Wiggers word je in de watten gelegd, ze nemen ruim de tijd voor je. En altijd in voor een praatje.",
  },
  {
    naam: "Masja Hendricksen",
    sterren: 5,
    tekst: "Heel klantvriendelijk en ook een hele goede kapper.",
  },
  {
    naam: "Pedro Koster",
    sterren: 5,
    tekst: "Toppie!!",
  },
  {
    naam: "Food & Place Testers",
    sterren: 5,
    tekst:
      "Geweldige aardige eigenaars. Vader op zoon en natuurlijk schoondochter, zo mooi om te zien. Werken hard, genieten goed, zijn daarom ook altijd positief. Fijn dat ik jullie heb leren kennen.",
  },
  {
    naam: "Dawid Markiewicz",
    sterren: 5,
    tekst:
      "Zeer goede en professionele service. Na mijn bezoek aan de salon zijn mijn haar en baard precies zoals ik ze wilde hebben. Ik beveel deze salon van harte aan!",
  },
];

export const galerijSectie = {
  eyebrow: "Achter de schermen",
};

export const galerij = [
  {
    bestand: "galerij-1",
    alt: "Krullen worden met een krultang in het haar gezet",
  },
  { bestand: "galerij-2", alt: "Close-up van een knipbeurt in uitvoering" },
  { bestand: "galerij-3", alt: "Haren worden gewassen bij de wasbak" },
  {
    bestand: "galerij-4",
    alt: "Rij kappersstoelen met spiegels in een salon",
  },
  { bestand: "galerij-5", alt: "Haarverf wordt aangebracht met folie" },
  { bestand: "galerij-6", alt: "Krultang zet golven in blond haar" },
  { bestand: "galerij-7", alt: "Haarpunten worden bijgeknipt" },
  { bestand: "galerij-8", alt: "Rij tondeuses klaar voor gebruik" },
  { bestand: "galerij-9", alt: "Drie kappers met een schaar en borstels" },
];

export const openingstijdenSectie = {
  eyebrow: "Praktische info",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "Makkelijk te vinden, ",
  headingAccent: "altijd welkom",
};

export const cta = {
  heading: "Klaar voor een frisse knipbeurt?",
  tekst: "Bel ons even, dan plannen we een moment dat jou uitkomt.",
};
