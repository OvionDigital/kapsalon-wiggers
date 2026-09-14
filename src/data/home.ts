export const intro = {
  eyebrow: "Sinds 1932",
  // headingAccent wordt cursief en in het accentgoud gezet.
  headingPrefix: "Vakmanschap dat je ",
  headingAccent: "voelt",
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

// TODO: vervangen door de automatische koppeling met Google Reviews, zodra
// die na oplevering wordt gebouwd. Tot die tijd zijn dit placeholder-teksten
// (namen, datums en sterren incluis) — ook "datum" is dus geen echte
// review-datum. Geen echte profielfoto's: de avatar in de slider toont tot
// die koppeling er is een kleurcirkel met initialen, nooit een verzonnen foto
// van een niet-bestaand persoon.
export const uitgelichteReviews = [
  {
    naam: "Marieke B.",
    sterren: 5,
    datum: "2 weken geleden",
    tekst:
      "Al jaren mijn vaste kapsalon. Altijd gezellig, en ze nemen echt de tijd voor je.",
  },
  {
    naam: "Tom H.",
    sterren: 5,
    datum: "3 weken geleden",
    tekst:
      "Nette scheerbeurt en een goed gesprek erbij. Precies zoals een kapsalon hoort te zijn.",
  },
  {
    naam: "Sanne V.",
    sterren: 5,
    datum: "een maand geleden",
    tekst:
      "Mijn zoontje vond het spannend om voor het eerst geknipt te worden, maar hier ging dat top.",
  },
  {
    naam: "Ellen K.",
    sterren: 5,
    datum: "een maand geleden",
    tekst:
      "Kom hier al sinds ik klein ben. Altijd een goed advies en nooit een teleurstellend resultaat.",
  },
  {
    naam: "Peter D.",
    sterren: 4,
    datum: "2 maanden geleden",
    tekst:
      "Prettige sfeer en een vakkundige knipbeurt. Iets langer wachten dan verwacht, maar dat mocht de pret niet drukken.",
  },
  {
    naam: "Linda W.",
    sterren: 5,
    datum: "2 maanden geleden",
    tekst:
      "Eindelijk een kapper die echt luistert naar wat je wilt. Kom hier al jaren met plezier.",
  },
  {
    naam: "Henk B.",
    sterren: 5,
    datum: "3 maanden geleden",
    tekst:
      "Vakmanschap van de oude stempel. Je voelt meteen dat ze weten wat ze doen.",
  },
  {
    naam: "Anouk S.",
    sterren: 5,
    datum: "3 maanden geleden",
    tekst:
      "Gezellige salon met een persoonlijke touch. Ik kom er altijd tevreden vandaan.",
  },
  {
    naam: "Rick T.",
    sterren: 5,
    datum: "4 maanden geleden",
    tekst:
      "Snel geholpen zonder dat het gehaast voelt. Precies zoals ik het wil.",
  },
  {
    naam: "Judith M.",
    sterren: 5,
    datum: "4 maanden geleden",
    tekst:
      "Al meerdere generaties in de familie klant hier. Dat zegt genoeg over de kwaliteit.",
  },
];

export const galerij = [
  {
    bestand: "galerij-1",
    alt: "Krullen worden met een krultang in het haar gezet",
  },
  { bestand: "galerij-2", alt: "Close-up van een knipbeurt in uitvoering" },
  { bestand: "galerij-3", alt: "Haren worden gewassen bij de wasbak" },
  {
    bestand: "galerij-4",
    alt: "Rij kappersstoelen met spiegels in een salon",
  },
  { bestand: "galerij-5", alt: "Haarverf wordt aangebracht met folie" },
  { bestand: "galerij-6", alt: "Krultang zet golven in blond haar" },
  { bestand: "galerij-7", alt: "Haarpunten worden bijgeknipt" },
  { bestand: "galerij-8", alt: "Rij tondeuses klaar voor gebruik" },
  { bestand: "galerij-9", alt: "Drie kappers met een schaar en borstels" },
];

export const cta = {
  heading: "Klaar voor een frisse knipbeurt?",
  tekst: "Bel ons even, dan plannen we een moment dat jou uitkomt.",
};

export const facebook = {
  tekst: "Volg ons op Facebook voor nieuws en sfeerbeelden uit de salon.",
  href: "#",
};
