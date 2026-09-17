// TODO: tarieven voor de categorie "Overig" zijn nog placeholders en moeten
// bij de klant geverifieerd worden. Heren, Dames en Kinderen zijn al bijgewerkt
// met de echte tarieven van de klant.

export interface Behandeling {
  naam: string;
  toelichting?: string;
  /** Vast bedrag in hele of halve euro's, of een tekstuele waarde zoals
   *  "Vanaf € 34,-" of "Op aanvraag" voor prijzen die niet vastliggen. */
  prijs: number | string;
}

export interface Categorie {
  /** Gebruikt als anchor-id (#heren) en in de snelnavigatie. */
  id: string;
  naam: string;
  omschrijving: string;
  behandelingen: Behandeling[];
}

export const categorieen: Categorie[] = [
  {
    id: "heren",
    naam: "Heren",
    omschrijving: "",
    behandelingen: [
      { naam: "Knippen", prijs: 28 },
      { naam: "Knippen senior", prijs: 27 },
      { naam: "Permanenten", prijs: "Vanaf € 72,50" },
      { naam: "Alleen zijkanten", prijs: 17.5 },
      { naam: "Tondeuze kapsel", prijs: 19 },
      { naam: "Lijnen inscheren", prijs: "Vanaf € 7,50" },
      { naam: "Figuren inscheren", prijs: "Vanaf € 15,-" },
      { naam: "Baard behandeling", prijs: 7.5 },
      { naam: "Baard bij trimmen", prijs: 3.5 },
    ],
  },
  {
    id: "dames",
    naam: "Dames",
    omschrijving: "",
    behandelingen: [
      { naam: "Knippen", prijs: 31.5 },
      { naam: "Wassen en Watergolven", prijs: 29 },
      { naam: "Vlechten", prijs: "Vanaf € 25,-" },
      { naam: "Föhnen", prijs: 31.5 },
      { naam: "Kleuren", prijs: "Vanaf € 48,50" },
      { naam: "Permanenten", prijs: "Vanaf € 95,50" },
      {
        naam: "Permanenten, inclusief knippen en stylen",
        prijs: "Vanaf € 135,-",
      },
    ],
  },
  {
    id: "kinderen",
    naam: "Kinderen",
    omschrijving: "",
    behandelingen: [
      { naam: "Knippen 0 tot 3 jaar", prijs: 19 },
      { naam: "Knippen van 4 tot en met 11", prijs: 23 },
      { naam: "Pony knippen", prijs: 10 },
      { naam: "Lijnen inscheren", prijs: "Vanaf € 5,-" },
      { naam: "Figuren inscheren", prijs: "Vanaf € 7,50" },
    ],
  },
  {
    id: "overig",
    naam: "Overig",
    omschrijving: "",
    behandelingen: [
      { naam: "Stylen voor gelegenheid", prijs: "Vanaf € 25,-" },
      { naam: "Kleuradvies", prijs: "Gratis" },
      { naam: "Wenkbrauwen bijwerken", prijs: 8.5 },
    ],
  },
];

// Merken die in de marquee onderaan elke pagina (MerkenMarquee.astro,
// gerenderd via Footer.astro) voorbijkomen.
export const merken = ["L'ANZA", "Gladjakkers"];
