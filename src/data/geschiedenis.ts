// Gebaseerd op de geschiedenistekst van de oude website van Kapsalon Wiggers
// (aangeleverd door Simon op 2026-10-09). Geen aanvullingen verzonnen: waar
// een jaartal ontbreekt, staat het er ook hier niet bij.
// TODO: oude foto's opvragen bij John; Tijdlijn.astro toont nu alleen tekst.

export interface GeschiedenisGebeurtenis {
  jaartal: string;
  titel: string;
  tekst: string;
}

export const geschiedenis: GeschiedenisGebeurtenis[] = [
  {
    jaartal: "1932",
    titel: "Het begin in Kilder",
    tekst:
      "Gradus J. Wiggers trouwt met Truus en begint in Kilder een kapperszaak, met een taxibedrijf ernaast.",
  },
  {
    jaartal: "Daarna",
    titel: "Een familiebedrijf",
    tekst:
      "De kinderen Annie, Leen, Mimmi, Henk en Jan krijgen ieder hun deel in het bedrijf. Henk en Jan nemen de kapsalon en de taxi op zich.",
  },
  {
    jaartal: "1963",
    titel: "Jan en Diny beginnen voor zichzelf",
    tekst:
      "Jan en Diny Wiggers beginnen zelfstandig een kapperszaakje aan de Oranjestraat.",
  },
  {
    jaartal: "1965",
    titel: "Naar de Julianastraat",
    tekst:
      "Het huidige pand aan de Julianastraat 10 is klaar. Vanaf hier groeit de salon uit tot het Kapsalon Wiggers van nu.",
  },
  {
    jaartal: "2009",
    titel: "John en Astrid nemen het over",
    tekst:
      "Op 1 januari 2009 nemen John en Astrid de kapsalon over. Samen kijken ze inmiddels terug op meer dan 90 jaar familiebedrijf.",
  },
];
