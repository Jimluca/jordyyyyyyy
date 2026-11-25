import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageIntro from "@/components/PageIntro";
import { values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over ons",
  description: `Maak kennis met ${site.name}: wie we zijn, waar we voor staan en hoe we werken.`,
};

export default function OverOnsPage() {
  return (
    <>
      <PageIntro
        label="Over ons"
        title="Eerlijk, persoonlijk en gericht op resultaat."
        text={`${site.name} is opgericht met één doel: mensen en organisaties verder helpen met een aanpak die werkt. Zonder ingewikkelde verhalen, wel met heldere afspraken.`}
      />

      {/* Verhaal */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <h2 className="text-3xl font-bold tracking-tight md:col-span-4 md:text-4xl">
            Ons verhaal
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-black/75 md:col-span-8">
            <p>
              Bij {site.name} geloven we dat goede samenwerking begint met luisteren. Pas als we
              écht begrijpen wat je wilt bereiken, kunnen we je verder helpen.
            </p>
            <p>
              We werken persoonlijk en betrokken. Je hebt één vast aanspreekpunt, korte lijnen en
              weet altijd waar je aan toe bent. Zo houden we het overzichtelijk, ook als het
              onderwerp dat niet is.
            </p>
            <p>
              Ons werk is pas klaar als het resultaat er staat. Daarom kijken we niet alleen naar
              het plan, maar ook naar wat er nodig is om het vol te houden.
            </p>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">Kernwaarden</p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            Waar we voor staan
          </h2>
          <div className="grid border-l border-t border-black sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="border-b border-r border-black p-8">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-4 leading-relaxed text-black/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <blockquote className="max-w-4xl text-3xl font-semibold leading-snug tracking-tight md:text-5xl">
            “Geen ruis, geen poespas. Gewoon doen wat werkt.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-widest text-black/50">— {site.name}</p>
        </div>
      </section>

      <CtaBanner title="Benieuwd wat we voor je kunnen doen?" />
    </>
  );
}
