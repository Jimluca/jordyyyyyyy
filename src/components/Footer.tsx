import Link from "next/link";
import Logo from "@/components/Logo";
import { navigation, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">{site.description}</p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Pagina&apos;s
          </h2>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Contact
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline underline-offset-4">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="hover:underline underline-offset-4"
              >
                {site.phone}
              </a>
            </li>
            <li className="text-white/70">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs uppercase tracking-widest text-white/50">
          © {site.name}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
