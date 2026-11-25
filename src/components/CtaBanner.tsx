import Link from "next/link";

export default function CtaBanner({
  title = "Klaar om te beginnen?",
  text = "Plan een vrijblijvend kennismakingsgesprek. We horen graag waar we je mee kunnen helpen.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-6 py-20 md:flex-row md:items-end">
        <div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">{text}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-3 border border-white bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-black hover:text-white"
        >
          Neem contact op <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
