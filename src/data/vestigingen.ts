// TODO: verifiëren bij klant — adres, telefoonnummer, e-mailadres en
// openingstijden hieronder zijn verzonnen placeholders en kloppen niet.
// Vervang ze door de definitieve gegevens zodra de klant ze aanlevert.

export interface Openingstijd {
  dagen: string;
  tijden: string;
}

export interface Vestiging {
  naam: string;
  adres: string;
  plaats: string;
  postcode: string;
  telefoon: string;
  email: string;
  openingstijden: Openingstijd[];
}

export const vestigingen: Vestiging[] = [
  {
    naam: "Wehl",
    adres: "Dorpsstraat 12",
    postcode: "6975 AB",
    plaats: "Wehl",
    telefoon: "+31 314 64 1234",
    email: "info@kapsalonwiggers.nl",
    openingstijden: [
      { dagen: "Di – Vr", tijden: "09:00 – 18:00" },
      { dagen: "Za", tijden: "08:30 – 16:00" },
      { dagen: "Ma & Zo", tijden: "Gesloten" },
    ],
  },
];

export const payoff = "Al ruim 90 jaar geknipt voor het vak";

// Het verhaal mag terugkomen als historie ("opgericht in 1932 in Kilder"),
// maar Kilder is geen huidige vestiging meer — de salon zit nu alleen in Wehl.
export const historie =
  "Opgericht in 1932 in Kilder, tegenwoordig gevestigd in Wehl.";

// Gestructureerde founding-gegevens voor de JSON-LD (HairSalon.foundingDate /
// foundingLocation in BaseLayout).
export const foundingYear = "1932";
export const foundingLocation = "Kilder";

export const reviews = {
  score: 4.8,
  aantal: 86,
};
