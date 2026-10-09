## Project

Website voor Kapsalon Wiggers, een dames- en herenkapsalon in Wehl (NL),
opgericht in 1932 in Kilder. Ruim 90 jaar oud. Voor heren, dames en kinderen.
Google-score 4,8 uit 87 reviews. Domein wordt kapsalonwiggers.nl.

Gebouwd door Simon Overbeek onder de naam Ovion Digital (oviondigital.nl).
Contactpersoon bij de klant is John.

## Scope en afspraken

- Vier pagina's: Home, Behandelingen & Tarieven, Over Wiggers, Contact
- Vaste prijs van €1.500 excl. btw, plus €25 per maand voor hosting en onderhoud
- Geen CMS
- **Geen online boekingssysteem bij launch.** Aimy is aanbevolen maar bewust
  uitgesteld naar na oplevering. De afspraakknop loopt nu via een dialoog met
  het telefoonnummer. Omschakelen naar Aimy gaat via één waarde in
  `src/data/afspraak.ts`.
- **Cookies en externe diensten (herzien 2026-10-09).** Oorspronkelijk was de
  site cookie- en trackervrij verkocht. Dat is losgelaten: de site gebruikt nu
  Adobe Fonts (Typekit, licentie staat zelf hosten niet toe), een Google
  Maps-iframe (klantwens) en Cloudflare Turnstile op het contactformulier.
  Daarom komt er een cookiebanner via **CookieFirst** (abonnement gaat mee in de
  maandelijkse kosten). Overige externe scripts blijven nog steeds zo veel
  mogelijk weg. Google Analytics 4 (G-ERJ9P3WN30) staat erin met Google
  Consent Mode via CookieFirst (ID in `src/data/cookies.ts`).

## Stack

Astro (empty template, strict TypeScript) + Tailwind CSS, `output: 'static'`,
npm als package manager. Deploy via Cloudflare Pages met Git-integratie
(build: `npm run build`, output: `dist`). Geen Cloudflare adapter.

Het contactformulier post naar een Cloudflare Pages Function
(`functions/api/contact.ts`) die via Resend mailt, met afzender
`noreply@oviondigital.nl` (zelfde opzet als het Ivory Global Care-project).
Environment variables in Cloudflare Pages: `RESEND_API_KEY`,
`TURNSTILE_SECRET_KEY` en optioneel `CONTACT_TO` (standaard
simon@oviondigital.nl voor de testfase).

## Werkwijze en stijl

- Alle klantgerichte teksten in het Nederlands, informeel (je/jullie)
- Vermijd de zinsconstructie "Geen X, geen Y, maar Z"
- Vermijd zinnen waarin een dubbele punt twee samenhangende zinsdelen splitst
- Werk stap voor stap, met een akkoordmoment tussen onderdelen, in plaats van
  alles in één keer opleveren
- Alle content uit databestanden in `src/data/`, niet hardcoded in de markup
- Alleen design tokens, geen losse hex-waarden of willekeurige spacing
- Mobile-first, WCAG AA, zichtbare focus-states, één H1 per pagina

## Openstaande punten

- **CookieFirst** staat erin (script in `BaseLayout.astro`, config in
  `src/data/cookies.ts`, pagina `/cookieverklaring`). De Google Maps-iframe
  laadt pas na toestemming voor de categorie "functional" (`data-src` +
  `data-cookiefirst-category`, volgens de CookieFirst-handleiding; Autoblock
  werkt niet voor iframes). Banner alleen te testen op kapsalonwiggers.nl.
- Na de testfase `CONTACT_TO` in Cloudflare Pages op info@kapsalonwiggers.nl
  zetten.
- Nog veel content ontbreekt: teamleden, foto's van John en Astrid, de
  categorie "Overig" bij de tarieven, extra FAQ-antwoorden (pinnen, afzeggen).
  Simon vult dit aan zodra de klant levert. Nooit zelf content verzinnen zonder
  het als TODO te markeren.
- Nog te bouwen: bevestigingspagina na formulier, 404-pagina afmaken

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
