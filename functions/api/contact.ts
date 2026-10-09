/**
 * Cloudflare Pages Function voor het contactformulier (POST /api/contact).
 * Verstuurt het bericht via Resend, zelfde aanpak als het Ivory Global
 * Care-project (afzender op het al geverifieerde oviondigital.nl-domein).
 *
 * Instellen in Cloudflare Pages → Settings → Variables and Secrets:
 * - RESEND_API_KEY (secret, verplicht)
 * - TURNSTILE_SECRET_KEY (secret, verplicht): hoort bij de site key in
 *   src/data/contact.ts.
 * - CONTACT_TO (optioneel): ontvanger. Zonder deze variabele gaat alles naar
 *   simon@oviondigital.nl, voor de testfase.
 *   TODO: na de test CONTACT_TO op info@kapsalonwiggers.nl zetten.
 *
 * Spam wordt tegengehouden met Cloudflare Turnstile, plus de honeypot
 * ("website") en een minimale invultijd ("ts", gezet door
 * ContactFormulier.astro) als extra vangnet.
 */

interface Env {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_TO?: string;
}

interface Context {
  request: Request;
  env: Env;
}

const STANDAARD_ONTVANGER = "simon@oviondigital.nl";
const AFZENDER = "Website Kapsalon Wiggers <noreply@oviondigital.nl>";
const MIN_INVULTIJD_MS = 3000;

const MAX_LENGTES = {
  naam: 100,
  email: 200,
  telefoon: 30,
  bericht: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(waarde: string) {
  return waarde.replace(/[&<>"']/g, (teken) => {
    switch (teken) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

function json(status: number, message: string) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function veld(data: Record<string, unknown>, naam: string) {
  const waarde = data[naam];
  return typeof waarde === "string" ? waarde.trim() : "";
}

async function turnstileGeldig(
  token: string,
  secret: string,
  ip: string | null,
) {
  if (!token) return false;

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body },
  );
  const resultaat = (await response.json()) as { success?: boolean };
  return resultaat.success === true;
}

export async function onRequestPost({ request, env }: Context) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, "Er ging iets mis bij het versturen. Probeer het opnieuw.");
  }

  const naam = veld(data, "naam");
  const email = veld(data, "email");
  const telefoon = veld(data, "telefoon");
  const bericht = veld(data, "bericht");

  // Honeypot ingevuld of formulier binnen een paar seconden verstuurd: vrijwel
  // zeker een bot. Doe alsof het gelukt is, zodat de bot niet gaat bijsturen.
  const ts = Number(veld(data, "ts"));
  if (veld(data, "website") || !ts || Date.now() - ts < MIN_INVULTIJD_MS) {
    return json(200, "Bedankt, je bericht is verstuurd!");
  }

  if (!naam || !email || !bericht) {
    return json(400, "Vul je naam, e-mailadres en bericht in.");
  }
  if (
    naam.length > MAX_LENGTES.naam ||
    email.length > MAX_LENGTES.email ||
    telefoon.length > MAX_LENGTES.telefoon ||
    bericht.length > MAX_LENGTES.bericht
  ) {
    return json(400, "Een van de velden is te lang.");
  }
  if (!EMAIL_REGEX.test(email)) {
    return json(400, "Vul een geldig e-mailadres in.");
  }

  if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY) {
    console.error("RESEND_API_KEY of TURNSTILE_SECRET_KEY ontbreekt");
    return json(
      500,
      "Het formulier werkt nu even niet. Bel of mail ons gerust direct.",
    );
  }

  try {
    const geldig = await turnstileGeldig(
      veld(data, "cf-turnstile-response"),
      env.TURNSTILE_SECRET_KEY,
      request.headers.get("CF-Connecting-IP"),
    );
    if (!geldig) {
      return json(
        400,
        "De controle tegen spam is mislukt. Probeer het nog een keer.",
      );
    }
  } catch (error) {
    console.error("Turnstile-controle mislukt", error);
    return json(
      500,
      "Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons.",
    );
  }

  const html = `
    <h2>Nieuw bericht via kapsalonwiggers.nl</h2>
    <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefoon:</strong> ${escapeHtml(telefoon) || "Niet ingevuld"}</p>
    <p><strong>Bericht:</strong></p>
    <p>${escapeHtml(bericht).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: AFZENDER,
        to: [env.CONTACT_TO || STANDAARD_ONTVANGER],
        reply_to: email,
        subject: `Websitebericht van ${naam.replace(/[\r\n]/g, " ")}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Resend-fout", response.status, await response.text());
      throw new Error("Resend-fout");
    }

    return json(200, "Bedankt, je bericht is verstuurd! We reageren zo snel mogelijk.");
  } catch (error) {
    console.error("Versturen contactformulier mislukt", error);
    return json(
      500,
      "Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons.",
    );
  }
}
