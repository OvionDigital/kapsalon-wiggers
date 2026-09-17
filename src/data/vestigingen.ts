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
    adres: "Julianastraat 10",
    postcode: "7031 ZX",
    plaats: "Wehl",
    telefoon: "0314 - 68 12 20",
    email: "info@kapsalonwiggers.nl",
    openingstijden: [
      { dagen: "Ma", tijden: "Gesloten" },
      { dagen: "Di – Do", tijden: "08:00 – 18:00" },
      { dagen: "Vr", tijden: "08:00 – 19:00" },
      { dagen: "Za", tijden: "08:00 – 13:30" },
      { dagen: "Zo", tijden: "Gesloten" },
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
  aantal: 87,
  // TODO: link naar het Google-bedrijfsprofiel invullen (bv.
  // https://g.page/r/...), dan verschijnt de "Bekijk alle reviews op
  // Google"-link vanzelf onder de reviews-sectie.
  googleUrl: "",
};
