"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

// Het formulier opent nu het e-mailprogramma van de bezoeker met een ingevuld bericht.
// Wil je dat berichten automatisch verstuurd worden? Koppel dan later een
// mailservice (bijvoorbeeld via een Server Action).
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("naam") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("telefoon") ?? "");
    const message = String(data.get("bericht") ?? "");

    const subject = `Contactaanvraag van ${name}`;
    const body =
      `${message}\n\n—\nNaam: ${name}\nE-mail: ${email}` +
      (phone ? `\nTelefoon: ${phone}` : "");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full border border-black bg-white px-4 py-3 text-base outline-none transition focus:bg-black focus:text-white placeholder:text-black/35 focus:placeholder:text-white/50";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.2em]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={label}>
            Naam *
          </label>
          <input id="naam" name="naam" type="text" required autoComplete="name" className={field} placeholder="Je naam" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            E-mail *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="naam@voorbeeld.nl" />
        </div>
      </div>
      <div>
        <label htmlFor="telefoon" className={label}>
          Telefoon
        </label>
        <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" className={field} placeholder="Optioneel" />
      </div>
      <div>
        <label htmlFor="bericht" className={label}>
          Bericht *
        </label>
        <textarea id="bericht" name="bericht" required rows={6} className={field} placeholder="Waar kunnen we je mee helpen?" />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-3 border border-black bg-black px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
      >
        Verstuur bericht <span aria-hidden="true">→</span>
      </button>

      {sent && (
        <p role="status" className="border border-black p-4 text-sm">
          Je e-mailprogramma is geopend met je bericht. Verstuur de e-mail daar om je bericht af
          te ronden. Lukt dat niet? Mail ons dan direct op{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
