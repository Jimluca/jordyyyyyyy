"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden md:block" aria-label="Hoofdmenu">
          <ul className="flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-sm font-medium uppercase tracking-widest underline-offset-8 transition hover:underline ${
                    isActive(item.href) ? "underline decoration-2" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-black transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-black transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav id="mobiel-menu" className="border-t border-black md:hidden" aria-label="Mobiel menu">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-black/10 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block px-6 py-4 text-sm font-medium uppercase tracking-widest ${
                    isActive(item.href) ? "bg-black text-white" : "hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
