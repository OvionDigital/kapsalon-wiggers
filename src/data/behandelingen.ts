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
    omschrijving:
      "Klassiek of modern, met oog voor de details die een coupe afmaken.",
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
    omschrijving:
      "Van een frisse knip tot een complete kleurbehandeling, altijd met persoonlijk advies vooraf.",
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
    omschrijving:
      "Rustig en geduldig, ook als het de allereerste knipbeurt is. Tot 12 jaar.",
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
    omschrijving: "Voor een speciale gelegenheid of net dat beetje extra.",
    behandelingen: [
      { naam: "Stylen voor gelegenheid", prijs: "Vanaf € 25,-" },
      { naam: "Kleuradvies", prijs: "Gratis" },
      { naam: "Wenkbrauwen bijwerken", prijs: 8.5 },
    ],
  },
];

export const producten = [
  {
    naam: "L'ANZA",
    omschrijving:
      "Amerikaans haarverzorgingsmerk met natuurlijke ingrediënten. We werken ermee in de salon en verkopen het ook los.",
    afbeelding: "lanza",
  },
  {
    naam: "Gladjakkers",
    omschrijving:
      "Nederlands stylingmerk, gemaakt om thuis makkelijk hetzelfde resultaat als bij de kapper te krijgen.",
    afbeelding: "gladjakkers",
  },
];
