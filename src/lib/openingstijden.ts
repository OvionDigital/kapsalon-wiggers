import type { Openingstijd } from "../data/vestigingen";

export const dagVolgorde = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"] as const;
export type DagAfkorting = (typeof dagVolgorde)[number];

const dagEngels: Record<DagAfkorting, string> = {
  Ma: "Monday",
  Di: "Tuesday",
  Wo: "Wednesday",
  Do: "Thursday",
  Vr: "Friday",
  Za: "Saturday",
  Zo: "Sunday",
};

function isDagAfkorting(waarde: string): waarde is DagAfkorting {
  return (dagVolgorde as readonly string[]).includes(waarde);
}

/** Vertaalt "Di – Vr" of "Ma & Zo" naar de losse dagafkortingen die erin zitten. */
export function parseDagenNL(dagen: string): DagAfkorting[] {
  if (dagen.includes("&")) {
    return dagen
      .split("&")
      .map((d) => d.trim())
      .filter(isDagAfkorting);
  }
  if (dagen.includes("–")) {
    const [start, eind] = dagen.split("–").map((d) => d.trim());
    const startIdx = dagVolgorde.indexOf(start as DagAfkorting);
    const eindIdx = dagVolgorde.indexOf(eind as DagAfkorting);
    if (startIdx === -1 || eindIdx === -1) return [];
    return dagVolgorde.slice(startIdx, eindIdx + 1);
  }
  const trimmed = dagen.trim();
  return isDagAfkorting(trimmed) ? [trimmed] : [];
}

/** Zelfde als parseDagenNL, maar dan als Engelse schema.org dayOfWeek-waarden. */
export function parseDagenEngels(dagen: string): string[] {
  return parseDagenNL(dagen).map((d) => dagEngels[d]);
}

export function parseTijden(
  tijden: string,
): { opens: string; closes: string } | null {
  if (tijden.trim().toLowerCase() === "gesloten") return null;
  const [opens, closes] = tijden.split("–").map((t) => t.trim());
  return opens && closes ? { opens, closes } : null;
}

const jsDagIndexNaarNL: DagAfkorting[] = [
  "Zo",
  "Ma",
  "Di",
  "Wo",
  "Do",
  "Vr",
  "Za",
];

export function vandaagAfkorting(datum: Date = new Date()): DagAfkorting {
  return jsDagIndexNaarNL[datum.getDay()];
}

export type OpeningstijdVandaag =
  | { open: true; tijden: string }
  | { open: false };

/** Zoekt de openingstijd die bij de opgegeven (build-)datum hoort. */
export function openingstijdVandaag(
  openingstijden: Openingstijd[],
  datum: Date = new Date(),
): OpeningstijdVandaag {
  const vandaag = vandaagAfkorting(datum);
  for (const item of openingstijden) {
    if (parseDagenNL(item.dagen).includes(vandaag)) {
      const tijd = parseTijden(item.tijden);
      return tijd
        ? { open: true, tijden: `${tijd.opens} – ${tijd.closes}` }
        : { open: false };
    }
  }
  return { open: false };
}
