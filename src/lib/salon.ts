/** Pad-fragment dat de HairSalon-entiteit in de JSON-LD identificeert.
 *  Pagina-specifieke structured data (zoals een OfferCatalog) kan hiernaar
 *  verwijzen via `provider: { "@id": getSalonId(Astro.site) }` zonder de
 *  hele HairSalon-entiteit te herhalen. */
export function getSalonId(site: URL | undefined): string {
  return new URL("/#salon", site).toString();
}

/** Google Maps-zoeklink op basis van een adres — geen ingesloten iframe, dus
 *  geen cookies of tracking van Google op de pagina zelf. */
export function getGoogleMapsHref(
  adres: string,
  postcode: string,
  plaats: string,
): string {
  const query = encodeURIComponent(`${adres}, ${postcode} ${plaats}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

/** Zet een weergegeven telefoonnummer (spaties/koppeltekens) om naar een
 *  geldige tel:-href. */
export function getTelHref(telefoon: string): string {
  return telefoon.replace(/[\s-]/g, "");
}
