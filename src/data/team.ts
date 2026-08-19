// TODO: definitieve content opvragen bij klant — namen, functies en teksten
// hieronder zijn placeholders, geen echte teamgegevens.

export interface TeamLid {
  naam: string;
  functie: string;
  omschrijving: string;
  /** Key naar een geïmporteerde portretfoto in Team.astro. */
  foto: string;
}

export const team: TeamLid[] = [
  {
    naam: "Peter Wiggers",
    functie: "Eigenaar & kapper",
    omschrijving: "Al meer dan 25 jaar achter de schaar, gespecialiseerd in klassieke herenkapsels.",
    foto: "team-1",
  },
  {
    naam: "Marloes Hendriks",
    functie: "Kapster",
    omschrijving: "Houdt van een goed gesprek en geeft altijd eerlijk kleuradvies.",
    foto: "team-2",
  },
  {
    naam: "Bas Willemsen",
    functie: "Kapper",
    omschrijving: "Gespecialiseerd in kinderen — geduldig en altijd een grapje paraat.",
    foto: "team-3",
  },
  {
    naam: "Anouk ten Berge",
    functie: "Kapster",
    omschrijving: "Van bruidskapsels tot dagelijkse stylings, Anouk kan het allemaal.",
    foto: "team-4",
  },
];
