const ResultsHeader = ({ totalResults, sortOrder, onSortChange }: { totalResults: number; sortOrder: "asc" | "desc"; onSortChange: (order: "asc" | "desc") => void }) => (
  <div className="flex items-center justify-between gap-3 border-b border-stone-200 py-3"><p className="text-sm font-medium text-stone-800">{totalResults} alojamientos encontrados</p><label className="flex items-center gap-2 text-sm text-stone-600">Ordenar<select aria-label="Ordenar por precio" value={sortOrder} onChange={(event) => onSortChange(event.target.value as "asc" | "desc")} className="rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-sm text-stone-900 outline-none"><option value="asc">Ascendente (menor a mayor)</option><option value="desc">Descendente (mayor a menor)</option></select></label></div>
);

export default ResultsHeader;
