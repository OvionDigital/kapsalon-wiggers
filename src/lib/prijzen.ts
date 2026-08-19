/** Formatteert een prijs voor weergave. Getallen worden Nederlandse
 *  euronotatie ("€ 24,-" of "€ 27,50"); tekstuele waarden ("Vanaf € 34,-",
 *  "Op aanvraag") worden ongewijzigd teruggegeven. */
export function formatPrijs(prijs: number | string): string {
  if (typeof prijs !== "number") return prijs;

  return Number.isInteger(prijs)
    ? `€ ${prijs},-`
    : `€ ${prijs.toFixed(2).replace(".", ",")}`;
}
