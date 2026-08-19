// TODO: definitieve content opvragen bij klant — onderstaande tijdlijn en
// teksten zijn plausibele placeholders, geen historisch geverifieerde feiten.

export interface GeschiedenisGebeurtenis {
  jaartal: string;
  titel: string;
  tekst: string;
  /** Optioneel: key naar een geïmporteerde afbeelding in Tijdlijn.astro. */
  afbeelding?: string;
}

export const geschiedenis: GeschiedenisGebeurtenis[] = [
  {
    jaartal: "1932",
    titel: "De start in Kilder",
    tekst: "Opa Wiggers begint een kleine kapsalon in Kilder. Eén stoel, een scheermes en veel vakmanschap waren genoeg om te beginnen.",
    afbeelding: "1932",
  },
  {
    jaartal: "1958",
    titel: "Een tweede generatie",
    tekst: "Het vak gaat over van vader op zoon. De salon groeit mee met het dorp en krijgt klanten voor het leven.",
  },
  {
    jaartal: "1981",
    titel: "Verhuizing naar Wehl",
    tekst: "De salon verhuist naar een groter pand in Wehl, dichter bij waar inmiddels de meeste klanten wonen.",
    afbeelding: "1981",
  },
  {
    jaartal: "2005",
    titel: "Derde generatie achter de schaar",
    tekst: "Weer een generatie Wiggers pakt de tondeuse over, met dezelfde aandacht voor het vak als opa ooit had.",
  },
  {
    jaartal: "Nu",
    titel: "Nog steeds hetzelfde vakmanschap",
    tekst: "Ruim 90 jaar later knippen we nog steeds heren, dames en kinderen met dezelfde persoonlijke aandacht als in 1932.",
  },
];
