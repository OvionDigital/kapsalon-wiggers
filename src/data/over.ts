export const verhaal = {
  paragrafen: [
    "Wiggers is geen salon die gisteren is begonnen. We knippen al sinds 1932, drie generaties lang, en dat merk je zodra je binnenstapt: geen gehaaste afspraak, maar tijd en aandacht voor wie er in de stoel zit.",
    "Wat begon als een eenmansbedrijfje met één stoel is uitgegroeid tot een vertrouwde salon in Wehl, waar heren, dames en kinderen even makkelijk terechtkunnen. Het vakmanschap is met de jaren meegegroeid, maar de persoonlijke aanpak is nooit veranderd.",
  ],
  oudeFotoOnderschrift: "De salon ergens in de jaren '30, kort na de opening in Kilder.",
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
    tekst: "Onze kinderstoel is geen gewoon stoeltje — het is een echte Mercedes 63 AMG. Precies het soort detail dat kinderen (en hun ouders) niet snel vergeten.",
    afbeelding: "kinderstoel",
    alt: "De kindersalonstoel in de vorm van een Mercedes 63 AMG",
    beeldZijde: "links",
  },
  {
    titel: "Altijd tijd voor een praatje",
    tekst: "Bij ons hoef je nooit te haasten. Een kop koffie, een goed gesprek en alle tijd voor advies — zo hoort een bezoek aan de kapper te zijn.",
    afbeelding: "sfeer",
    alt: "Sfeerbeeld van de zithoek in de salon",
    beeldZijde: "rechts",
  },
];
