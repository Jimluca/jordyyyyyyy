import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import { services, steps } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="flex flex-col gap-8 md:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">{site.name}</p>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight lg:text-7xl">
              Helder advies.
              <br />
              <span className="text-black/35">Zichtbaar</span> resultaat.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-black/70">
              We helpen je van idee naar resultaat. Met een duidelijke aanpak, korte lijnen en
              persoonlijke begeleiding.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-black bg-black px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
              >
                Contact <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/werkwijze"
                className="inline-flex items-center border border-black px-6 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-black hover:text-white"
              >
                Werkwijze
              </Link>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="border border-black p-2">
              <Image
                src="/afbeeldingen/hero.jpg"
                alt="Grand Theft Auto VI-logo met palmbomen op een roze achtergrond"
                width={1200}
                height={900}
                sizes="(min-width: 1152px) 552px, (min-width: 768px) 50vw, 100vw"
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="border-b border-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Wat we doen</h2>
            <Link
              href="/over-ons"
              className="text-sm font-semibold uppercase tracking-widest underline underline-offset-8 hover:no-underline"
            >
              Over ons
            </Link>
          </div>
          <div className="grid border-l border-t border-black md:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group border-b border-r border-black p-8 transition hover:bg-black hover:text-white"
              >
                <span className="font-mono text-sm text-black/40 group-hover:text-white/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-black/70 group-hover:text-white/70">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze in het kort */}
      <section className="border-b border-black">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]">Werkwijze</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              In {steps.length} stappen naar resultaat
            </h2>
            <Link
              href="/werkwijze"
              className="mt-8 inline-block text-sm font-semibold uppercase tracking-widest underline underline-offset-8 hover:no-underline"
            >
              Bekijk de hele werkwijze
            </Link>
          </div>
          <ol className="md:col-span-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-8 border-t border-black py-6 last:border-b"
              >
                <span className="font-mono text-sm text-black/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1 text-black/70">{step.short}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
