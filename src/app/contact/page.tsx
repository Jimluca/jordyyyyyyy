import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${site.name}. We horen graag van je.`,
};

const details = [
  { label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { label: "Telefoon", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "Locatie", value: site.location },
  { label: "Bereikbaar", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Laten we kennismaken."
        text="Heb je een vraag of wil je weten wat we voor je kunnen doen? Stuur een bericht of bel ons. We reageren binnen twee werkdagen."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-12">
          <aside className="md:col-span-4">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Gegevens</h2>
            <dl>
              {details.map((item) => (
                <div key={item.label} className="border-t border-black py-5 last:border-b">
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-lg">
                    {item.href ? (
                      <a href={item.href} className="hover:underline underline-offset-4">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="md:col-span-8">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
