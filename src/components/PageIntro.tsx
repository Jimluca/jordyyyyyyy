export default function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-black">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]">{label}</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/70">{text}</p>
      </div>
    </section>
  );
}
