import Link from "next/link";

const BackButton = ({ href = "/catalog", label = "Volver al catálogo" }: { href?: string; label?: string }) => (
  <Link href={href} className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-700"><span aria-hidden="true">←</span>{label}</Link>
);

export default BackButton;
