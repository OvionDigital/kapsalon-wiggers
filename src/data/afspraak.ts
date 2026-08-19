/**
 * Centrale configuratie voor "Afspraak maken". Alle afspraakknoppen en het
 * AfspraakDialog-paneel lezen hieruit.
 *
 * Zodra de klant Aimy afneemt: zet modus op 'aimy' en vul aimyUrl in. Dat is
 * de enige aanpassing die nodig is — het paneel toont dan automatisch de
 * boekingsomgeving in plaats van het belblok, overal waar de afspraakknop
 * gebruikt wordt.
 */
export const afspraak = {
  modus: "telefoon" as "telefoon" | "aimy",
  aimyUrl: "", // TODO: invullen zodra de klant Aimy afneemt
  // Telefoonnummer en openingstijden komen uit vestigingen.ts.
};
