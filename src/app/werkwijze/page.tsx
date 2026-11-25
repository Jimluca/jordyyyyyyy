import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import TrainingenHero from "@/components/werkwijze/TrainingenHero";
import { steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Trainingen voor Icares Professional en Icares Quest: praktisch, concreet en direct toepasbaar.",
};

const promises = [
  "Eén vast aanspreekpunt",
  "Heldere afspraken over tijd en kosten",
  "Regelmatige updates over de voortgang",
  "Eerlijk advies, ook als het anders moet",
];

export default function WerkwijzePage() {
  return (
    <>
      <TrainingenHero />

      {/* Stappen */}
      <section className="border-b border-black">
        <ol className="mx-auto max-w-6xl px-6 py-12">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="grid gap-6 border-b border-black py-12 last:border-b-0 md:grid-cols-12"
            >
              <span className="text-6xl font-bold leading-none tracking-tight text-black/15 md:col-span-2 md:text-7xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-semibold md:col-span-4 md:text-3xl">{step.title}</h2>
              <p className="text-lg leading-relaxed text-black/70 md:col-span-6">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Wat je mag verwachten */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <h2 className="text-3xl font-bold tracking-tight md:col-span-5 md:text-4xl">
            Wat je van ons mag verwachten
          </h2>
          <ul className="md:col-span-7">
            {promises.map((promise) => (
              <li
                key={promise}
                className="flex items-center gap-6 border-t border-black py-5 text-lg last:border-b"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-black" />
                {promise}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Zullen we kennismaken?"
        text="De eerste stap is altijd een vrijblijvend gesprek. Laat je gegevens achter en we nemen contact met je op."
      />
    </>
  );
}
