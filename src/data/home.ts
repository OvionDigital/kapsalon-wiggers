export const intro = {
  eyebrow: "Sinds 1932",
  heading: "Vakmanschap dat je voelt",
  paragrafen: [
    "Kapsalon Wiggers begon in 1932 in Kilder en is inmiddels al bijna een eeuw onderdeel van de streek. Die geschiedenis merk je nog steeds: we werken met vakmanschap dat van generatie op generatie is doorgegeven, in een salon in Wehl waar je je meteen op je gemak voelt.",
    "Geen haastig knipbeurtje, maar tijd en aandacht voor wat jij wilt — of je nou al jaren bij ons komt of voor het eerst binnenstapt. Voor heren, dames en kinderen, van klassieke coupes tot een frisse nieuwe stijl.",
  ],
};

// Elke kaart licht één concrete behandeling per doelgroep uit, met de prijs uit
// behandelingen.ts. De prijzen zijn de echte tarieven van de klant.
// TODO: bij de klant checken of "Knippen" per doelgroep inderdaad de
// populairste behandeling is die we hier willen tonen.
// TODO: placeholder-foto's vervangen door echte portretten van een man, een
// vrouw en een kind (afbeelding-sleutel = heren/dames/kinderen).
export const behandelingen = [
  {
    doelgroep: "Heren",
    behandeling: "Knippen",
    prijs: "€ 28",
    vanaf: true,
    afbeelding: "heren",
  },
  {
    doelgroep: "Dames",
    behandeling: "Knippen",
    prijs: "€ 31,50",
    vanaf: true,
    afbeelding: "dames",
  },
  {
    doelgroep: "Kinderen",
    behandeling: "Knippen",
    prijs: "€ 19",
    vanaf: true,
    afbeelding: "kinderen",
  },
];

// TODO: echte reviews ophalen uit Google (deze teksten zijn placeholders)
export const uitgelichteReviews = [
  {
    naam: "Marieke B.",
    tekst:
      "Al jaren mijn vaste kapsalon. Altijd gezellig, en ze nemen echt de tijd voor je.",
  },
  {
    naam: "Tom H.",
    tekst:
      "Nette scheerbeurt en een goed gesprek erbij. Precies zoals een kapsalon hoort te zijn.",
  },
  {
    naam: "Sanne V.",
    tekst:
      "Mijn zoontje vond het spannend om voor het eerst geknipt te worden, maar hier ging dat top.",
  },
];

export const galerij = [
  { bestand: "galerij-1", alt: "Werkplek met kappersstoel en spiegel" },
  { bestand: "galerij-2", alt: "Close-up van een knipbeurt in uitvoering" },
  { bestand: "galerij-3", alt: "Sfeerbeeld van de wachtruimte" },
  { bestand: "galerij-4", alt: "Detail van kappersgereedschap" },
  { bestand: "galerij-5", alt: "Afgewerkt kapsel van opzij" },
  { bestand: "galerij-6", alt: "Interieur van de salon in Wehl" },
];

export const cta = {
  heading: "Klaar voor een frisse knipbeurt?",
  tekst: "Bel ons even, dan plannen we een moment dat jou uitkomt.",
};

export const facebook = {
  tekst: "Volg ons op Facebook voor nieuws en sfeerbeelden uit de salon.",
  href: "#",
};
