import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  const mark = inverted ? "bg-white text-black" : "bg-black text-white";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} – naar home`}>
      <span
        className={`flex h-9 w-9 items-center justify-center text-sm font-bold tracking-tight ${mark}`}
        aria-hidden="true"
      >
        JI
      </span>
      <span className="text-lg font-semibold uppercase tracking-[0.18em]">{site.name}</span>
    </Link>
  );
}
