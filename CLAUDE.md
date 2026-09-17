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
- **De site moet cookie- en trackervrij blijven.** Dit is expliciet aan de klant
  verkocht als voordeel, want het scheelt een cookiebanner. Dus geen Google
  Fonts, geen externe scripts, geen iframes, geen embeds. Fonts lokaal bundelen.
  Google Analytics is om deze reden afgevallen; analytics loopt straks via de
  server-side variant van Cloudflare Web Analytics, zonder script in de HTML.

## Stack

Astro (empty template, strict TypeScript) + Tailwind CSS, `output: 'static'`,
npm als package manager. Deploy via Cloudflare Pages met Git-integratie
(build: `npm run build`, output: `dist`). Geen Cloudflare adapter.

Het contactformulier krijgt later een Cloudflare Pages Function als backend.
Welke mailprovider dat wordt is nog niet besloten; Simon kijkt naar de oplossing
die hij eerder in het Ivory Global Care-project heeft gebouwd.

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

- Vrijwel alle content is placeholder: NAW-gegevens, tarieven, teamleden,
  geschiedenis, reviews, foto's. Simon vult dit zelf aan zodra de klant levert.
  Nooit zelf content verzinnen zonder het als TODO te markeren.
- Nog te bouwen: privacyverklaring, favicon-set, OG-afbeelding, bevestigings-
  pagina na formulier, 404-pagina afmaken, contactformulier-backend
- De vanaf-prijzen op de homepage staan los van `behandelingen.ts` en moeten uit
  één bron komen
- De Facebook-link staat op `href="#"` en heeft nog geen echte URL

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
