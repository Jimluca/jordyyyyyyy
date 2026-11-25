import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]">404</p>
      <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Pagina niet gevonden.</h1>
      <p className="mt-6 max-w-xl text-lg text-black/70">
        De pagina die je zoekt bestaat niet (meer). Ga terug naar de homepagina.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 border border-black bg-black px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
      >
        Naar home <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
