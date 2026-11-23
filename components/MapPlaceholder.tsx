import type { Listing } from "@/types/listing";

const MapPlaceholder = ({ listings = [] }: { listings?: Listing[] }) => (
  <div aria-label={`Mapa con ${listings.length} alojamientos`} className="flex h-64 w-full items-center justify-center rounded-2xl border border-stone-200 bg-[#e9e8e4] font-medium text-stone-600 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">Mapa</div>
);

export default MapPlaceholder;
