import Link from "next/link";

const SearchBar = ({ searchQuery, onSearchChange }: { searchQuery: string; onSearchChange: (value: string) => void }) => (
  <div className="flex h-[62px] items-center gap-3 rounded-full border border-stone-200 bg-white px-4 shadow-md shadow-stone-900/5">
    <span className="text-lg" aria-hidden="true">⌕</span>
    <input aria-label="Busca destinos o alojamientos" value={searchQuery} onChange={(event) => onSearchChange(event.target.value)} placeholder="¿Adónde quieres ir?" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-stone-500" />
    <span className="hidden h-8 border-l border-stone-200 sm:block" />
    <Link href="/catalog" aria-label="Abrir catálogo" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 text-stone-700 hover:shadow-md">☰</Link>
  </div>
);

export default SearchBar;
