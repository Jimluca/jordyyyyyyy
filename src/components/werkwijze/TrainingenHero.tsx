import Link from "next/link";
import { Caveat, Figtree } from "next/font/google";
import type { ReactNode } from "react";

// Hero + "Ons aanbod"-opener voor de Werkwijze-pagina.
// Nagebouwd uit de design-handoff "Icares Trainingen hero" (oranje/navy, Figtree).

const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

const ease = "duration-[160ms] ease-[cubic-bezier(.4,0,.2,1)]";

function Icon({ size, stroke, children }: { size: number; stroke: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ArrowRight = ({ size }: { size: number }) => (
  <Icon size={size} stroke={2.2}>
    <path d="M5 12h13" />
    <path d="M13 6l6 6-6 6" />
  </Icon>
);

const trustItems = [
  {
    title: "Ervaren trainers",
    sub: "Uit de praktijk",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Direct toepasbaar",
    sub: "Concrete handvatten",
    icon: (
      <>
        <path d="M22 9l-10-5L2 9l10 5 10-5z" />
        <path d="M6 11.5V16c0 1.3 2.7 2.5 6 2.5s6-1.2 6-2.5v-4.5" />
      </>
    ),
  },
  {
    title: (
      <>
        Voor onderwijs
        <br />
        en professionals
      </>
    ),
    sub: null,
    icon: (
      <>
        <path d="M6 20V13" />
        <path d="M12 20V6" />
        <path d="M18 20v-5" />
      </>
    ),
  },
];

// De productpagina's bestaan nog niet; de links gaan voorlopig naar contact.
const cards = [
  {
    title: "Icares Professional",
    badge: "Voor professionals",
    text: "De belangrijkste modules en functies van Icares Professional. Geschikt voor re-integratiebegeleiders, jobcoaches en onderwijsprofessionals die het maximale uit de tool willen halen.",
    link: { href: "/contact", label: "Meer over Icares Professional" },
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.5 19a6 6 0 0 1 11 0" />
      </>
    ),
  },
  {
    title: "Icares Quest",
    badge: "Voor scholen",
    text: "Het LOB-instrument voor het voortgezet onderwijs. In deze training leer je Quest slim in te zetten in je mentorlessen en LOB-programma's.",
    link: { href: "/contact", label: "Meer over Icares Quest" },
    icon: (
      <>
        <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3H10a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 1 2 14.5z" />
        <path d="M22 5.5A2.5 2.5 0 0 0 19.5 3H14a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h5.5a2.5 2.5 0 0 0 2.5-2.5z" />
      </>
    ),
  },
];

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Rechts: perzikkleurige vlekken en een dunne lijn */}
      <div className="absolute -top-[340px] -right-[260px] h-[820px] w-[900px] rounded-full bg-[radial-gradient(circle_at_35%_65%,#F9C08A_0%,#FBD5AE_45%,rgba(253,240,226,0)_72%)] opacity-85" />
      <div className="absolute -top-[120px] -right-[40px] h-[420px] w-[420px] rounded-full bg-[#F7B274] opacity-35 blur-[2px]" />
      <svg
        viewBox="0 0 400 700"
        className="absolute top-0 right-[60px] h-[700px] w-[400px] overflow-visible"
        fill="none"
      >
        <path
          d="M392 -20C300 140 250 300 268 430C284 548 340 620 400 668"
          stroke="#F5A05A"
          strokeWidth="2"
          opacity=".55"
        />
      </svg>

      {/* Links: zachte cirkels */}
      <div className="absolute top-[20px] left-[150px] h-[180px] w-[180px] rounded-full bg-[#FBDCBE] opacity-50" />
      <div className="absolute -top-[70px] -left-[90px] h-[280px] w-[280px] rounded-full bg-[#FCE7D3] opacity-55" />
      <div className="absolute top-[280px] -left-[220px] h-[460px] w-[520px] rounded-full bg-[#FBE3CC] opacity-45" />

      {/* Stippenraster: alleen op brede schermen, anders valt het over de kop */}
      <div className="absolute top-[128px] left-[22px] hidden grid-cols-[repeat(6,16px)] gap-[14px] min-[1800px]:grid">
        {Array.from({ length: 36 }, (_, i) => (
          <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#F7B57A]" />
        ))}
      </div>
    </div>
  );
}

export default function TrainingenHero() {
  return (
    <div className={`${figtree.variable} ${caveat.variable} font-[family-name:var(--font-figtree)] text-[#16264A]`}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#FFF8F2_0%,#FEFCFA_45%,#FDFAF7_100%)]">
        <Decorations />

        <div className="relative mx-auto grid max-w-[1458px] items-start gap-14 px-6 pt-16 pb-28 min-[700px]:pt-24 min-[700px]:pb-[152px] min-[1100px]:grid-cols-[714fr_696fr] min-[1100px]:gap-0">
          {/* Linkerkolom */}
          <div className="max-w-[660px]">
            <p className="text-[15px] font-semibold uppercase tracking-[.17em] text-[#F5811F]">
              Trainingen
            </p>
            <h1 className="mt-[14px] text-[clamp(40px,6vw,72px)] leading-[1.06] font-extrabold tracking-[-.018em]">
              Haal het maximale
              <br />
              uit <span className="text-[#F5811F]">Icares</span>
            </h1>
            <p className="mt-[30px] max-w-[648px] text-[18px] leading-[1.55] text-[#5A6472] min-[700px]:text-[21px]">
              Met onze trainingen voor Icares Professional en Icares Quest effectief inzetten in de
              begeleiding van leerlingen, studenten en cliënten. Praktisch, concreet en direct
              toepasbaar.
            </p>

            <div className="mt-[38px] flex flex-col gap-[22px] min-[700px]:flex-row">
              <a
                href="#aanbod"
                className={`inline-flex h-14 items-center justify-center gap-[14px] rounded-[10px] bg-[#F5811F] px-[30px] text-[18px] font-bold text-white shadow-[0_10px_22px_rgba(245,129,31,.28)] transition hover:brightness-[.96] motion-safe:hover:-translate-y-0.5 ${ease}`}
              >
                Bekijk de trainingen
                <ArrowRight size={20} />
              </a>
              <Link
                href="/contact"
                className={`inline-flex h-14 items-center justify-center rounded-[10px] border-2 border-[#F5811F] bg-white px-[30px] text-[18px] font-bold text-[#F5811F] transition hover:bg-[#FEF1E4] ${ease}`}
              >
                Neem contact op
              </Link>
            </div>

            <ul className="mt-[44px] flex flex-col gap-x-16 gap-y-5 min-[700px]:flex-row min-[700px]:flex-wrap min-[1458px]:w-max min-[1458px]:flex-nowrap">
              {trustItems.map((item, i) => (
                <li key={i} className="flex items-center gap-[14px]">
                  <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-[#FCE7D2] text-[#F5811F]">
                    <Icon size={22} stroke={1.9}>
                      {item.icon}
                    </Icon>
                  </span>
                  {item.sub ? (
                    <div>
                      <div className="text-[16px] font-bold">{item.title}</div>
                      <div className="mt-0.5 text-[15px] text-[#7C8593]">{item.sub}</div>
                    </div>
                  ) : (
                    <div className="text-[16px] leading-[1.35] font-bold">{item.title}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Rechterkolom: productkaarten */}
          <div className="relative flex w-full max-w-[696px] flex-col gap-[22px]">
            {cards.map((card) => (
              <article
                key={card.title}
                className="grid items-start gap-4 rounded-2xl bg-white px-6 pt-6 pb-6 shadow-[0_8px_28px_rgba(23,38,74,.07)] min-[700px]:grid-cols-[72px_1fr] min-[700px]:gap-[22px] min-[700px]:px-8 min-[700px]:pt-7 min-[700px]:pb-[26px]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FCE7D2] text-[#F5811F] min-[700px]:mt-1 min-[700px]:h-16 min-[700px]:w-16">
                  <Icon size={30} stroke={1.8}>
                    {card.icon}
                  </Icon>
                </span>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-2">
                    <h2 className="text-[23px] leading-[1.2] font-bold">{card.title}</h2>
                    <span className="mt-[3px] flex-none rounded-full bg-[#FCE7D2] px-3 py-1.5 text-[11px] font-bold tracking-[.07em] text-[#E0771A] uppercase">
                      {card.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-[17px] leading-[1.5] text-[#5A6472]">{card.text}</p>
                  <Link
                    href={card.link.href}
                    className={`mt-5 inline-flex items-center gap-2.5 text-[17px] font-bold text-[#F5811F] transition-colors hover:text-[#D96A0C] ${ease}`}
                  >
                    {card.link.label}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}

            {/* Handgeschreven notitie */}
            <div
              aria-hidden="true"
              className="absolute right-[120px] -bottom-[104px] hidden w-[200px] -rotate-[7deg] min-[700px]:block"
            >
              <div className="font-[family-name:var(--font-caveat)] text-[30px] leading-[1.15] font-semibold text-[#F5811F]">
                Samen meer impact maken
              </div>
              <svg viewBox="0 0 170 22" className="mt-0.5 ml-[26px] h-5 w-[150px]" fill="none">
                <path
                  d="M3 15C34 5 120 2 166 14"
                  stroke="#F5811F"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Golf: moet het laatste kind van de hero blijven */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1856 110"
          preserveAspectRatio="none"
          className="absolute -bottom-px left-0 block h-[82px] w-full"
          fill="none"
        >
          <path d="M0 74C240 26 560 6 928 22C1296 38 1620 74 1856 44V112H0Z" fill="#FFFFFF" />
        </svg>
      </section>

      {/* Ons aanbod */}
      <section id="aanbod" className="relative scroll-mt-24 bg-white px-6 pb-14 text-center">
        <p className="text-[15px] font-semibold uppercase tracking-[.17em] text-[#F5811F]">
          Ons aanbod
        </p>
        <h2 className="mt-3 text-[clamp(32px,4.5vw,46px)] font-extrabold tracking-[-.018em]">
          Kies de training die bij je past
        </h2>
        <p className="mx-auto mt-[18px] max-w-[660px] text-[18px] leading-[1.5] text-[#5A6472] min-[700px]:text-[20px]">
          Bij jou op locatie, samen met anderen in Eindhoven of speciaal voor het onderwijs.
        </p>
      </section>
    </div>
  );
}
