// TODO: tarieven verifiëren bij klant — dit zijn placeholders

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
      { naam: "Knippen", prijs: 24 },
      {
        naam: "Knippen + baard",
        toelichting: "Inclusief scheren en verzorging",
        prijs: 32,
      },
      { naam: "Baard bijwerken", prijs: 12 },
      { naam: "Knippen + wassen", prijs: 27.5 },
    ],
  },
  {
    id: "dames",
    naam: "Dames",
    omschrijving:
      "Van een frisse knip tot een complete kleurbehandeling — altijd met persoonlijk advies vooraf.",
    behandelingen: [
      { naam: "Knippen", prijs: "Vanaf € 34,-" },
      {
        naam: "Wassen, knippen, föhnen",
        toelichting: "Inclusief kopmassage",
        prijs: "Vanaf € 39,-",
      },
      { naam: "Föhnen / stylen", prijs: 24 },
      { naam: "Kleuren", toelichting: "Prijs is afhankelijk van haarlengte", prijs: "Vanaf € 55,-" },
      { naam: "Highlights / coupe soleil", prijs: "Op aanvraag" },
    ],
  },
  {
    id: "kinderen",
    naam: "Kinderen",
    omschrijving:
      "Rustig en geduldig, ook als het de allereerste knipbeurt is — tot 12 jaar.",
    behandelingen: [
      { naam: "Knippen t/m 12 jaar", prijs: 18 },
      { naam: "Eerste knipbeurt", toelichting: "Inclusief certificaatje", prijs: "Op aanvraag" },
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
      "Amerikaans haarverzorgingsmerk met natuurlijke ingrediënten — we werken ermee in de salon en verkopen het ook los.",
    afbeelding: "lanza",
  },
  {
    naam: "Gladjakkers",
    omschrijving:
      "Nederlands stylingmerk, gemaakt om thuis makkelijk hetzelfde resultaat als bij de kapper te krijgen.",
    afbeelding: "gladjakkers",
  },
];
