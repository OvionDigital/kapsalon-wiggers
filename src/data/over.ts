export const verhaal = {
  paragrafen: [
    "Kapsalon Wiggers beschikt over tal van vakcertificaten. We knippen alle soorten kapsels en coupes, en je kunt bij ons ook terecht voor kleuren, permanenten en bruidskapsels. Noem het maar op!",
    "We knippen iedereen van 0 tot 103 jaar. In de salon staat zelfs een stoere zwarte Mercedes (63 AMG) om de kleintjes te vermaken tijdens het knippen. En we hebben een uitgebreid aanbod aan producten om je haar mee te verwennen.",
  ],
  oudeFotoOnderschrift: "",
};

export interface Feature {
  titel: string;
  tekst: string;
  afbeelding: string;
  alt: string;
  beeldZijde: "links" | "rechts";
}

export const features: Feature[] = [
  {
    titel: "De kinderstoel: een Mercedes 63 AMG",
    tekst:
      "Onze kinderstoel is geen gewoon stoeltje, het is een echte Mercedes 63 AMG. Precies het soort detail dat kinderen (en hun ouders) niet snel vergeten.",
    afbeelding: "kinderstoel",
    alt: "De kindersalonstoel in de vorm van een Mercedes 63 AMG",
    beeldZijde: "links",
  },
  {
    titel: "Altijd tijd voor een praatje",
    tekst:
      "Bij ons hoef je je nooit te haasten. We nemen ruim de tijd voor advies en zijn altijd in voor een goed gesprek. Zo hoort een bezoek aan de kapper te zijn.",
    afbeelding: "sfeer",
    alt: "Sfeerbeeld van de zithoek in de salon",
    beeldZijde: "rechts",
  },
];
