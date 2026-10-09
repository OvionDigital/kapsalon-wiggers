export const verhaal = {
  paragrafen: [
    "Kapsalon Wiggers beschikt over tal van vakcertificaten. We knippen alle soorten kapsels en coupes, en je kunt bij ons ook terecht voor kleuren, permanenten en bruidskapsels. Noem het maar op!",
    "We knippen iedereen van 0 tot 103 jaar. In de salon staat zelfs een stoere zwarte Mercedes (63 AMG) om de kleintjes te vermaken tijdens het knippen. En we hebben een uitgebreid aanbod aan producten om je haar mee te verwennen.",
  ],
  oudeFotoOnderschrift: "",
};

export interface Feature {
  titel: string;
  tekst: string;
  afbeelding: string;
  alt: string;
  beeldZijde: "links" | "rechts";
}

export const features: Feature[] = [
  {
    titel: "De kinderstoel: een Mercedes 63 AMG",
    tekst:
      "Onze kinderstoel is geen gewoon stoeltje, het is een echte Mercedes 63 AMG. Precies het soort detail dat kinderen (en hun ouders) niet snel vergeten.",
    afbeelding: "kinderstoel",
    alt: "De kindersalonstoel in de vorm van een Mercedes 63 AMG",
    beeldZijde: "links",
  },
  {
    titel: "Altijd tijd voor een praatje",
    tekst:
      "Bij ons hoef je je nooit te haasten. We nemen ruim de tijd voor advies en zijn altijd in voor een goed gesprek. Zo hoort een bezoek aan de kapper te zijn.",
    afbeelding: "sfeer",
    alt: "Sfeerbeeld van de zithoek in de salon",
    beeldZijde: "rechts",
  },
];

// Foto's uit het familiealbum, aangeleverd door John (2026-10-09). Een van de
// albumpagina's heeft als bijschrift "Opening Kapsalon 1965". Wie er op de
// foto's staan is niet bekend, dus de alt-teksten noemen geen namen.
// TODO: bij John navragen wie er op de foto's staan (Jan en Diny?).
export const vroegerSectie = {
  eyebrow: "Uit het familiealbum",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "De opening in ",
  headingAccent: "1965",
  tekst:
    "In 1965 opende de kapsalon aan de Julianastraat in Wehl. Deze foto's uit het familiealbum laten zien hoe het er toen uitzag. Klik op een foto om hem groter te bekijken.",
};

export const vroegerFotos: { bestand: string; alt: string }[] = [
  {
    bestand: "opening-1965-1",
    alt: "Albumpagina met een foto van het nieuwe pand en het bijschrift 'Opening Kapsalon 1965'",
  },
  {
    bestand: "opening-1965-2",
    alt: "Het nieuwe pand van de kapsalon, schuin van voren gezien",
  },
  {
    bestand: "opening-1965-3",
    alt: "Een man en een vrouw proosten achter de toonbank, met bloemen en producten",
  },
  {
    bestand: "opening-1965-4",
    alt: "Bezoekers in de kapsalon tijdens de opening",
  },
  {
    bestand: "opening-1965-5",
    alt: "De kappersstoelen met droogkappen langs de spiegelwand",
  },
  {
    bestand: "opening-1965-6",
    alt: "Een man in pak staat in de nieuwe salon tussen de kappersstoelen",
  },
  {
    bestand: "opening-1965-7",
    alt: "Een vrouw biedt een gast een drankje aan in de salon",
  },
  {
    bestand: "opening-1965-8",
    alt: "De voorgevel van de kapsalon met de etalage",
  },
];
