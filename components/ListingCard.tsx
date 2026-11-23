import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";

const ListingCard = ({ listing, compact = false }: { listing: Listing; compact?: boolean }) => {
  return (
    <Link href={`/rooms/${listing.id}`} className="group flex min-w-0 flex-col gap-2.5">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-gray-100 ${compact ? "aspect-[4/3]" : "aspect-[1/0.96]"}`}>
        <Image src={listing.imageUrl} alt={listing.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-sm">Favorito entre huéspedes</span>
        <span className="absolute right-3 top-3 text-xl text-white drop-shadow" aria-label="Guardar">♡</span>
      </div>
      <div className="flex items-start justify-between gap-3 text-sm">
        <div className="min-w-0"><h2 className="truncate font-semibold text-stone-900">{listing.title}</h2><p className="truncate text-stone-500">{listing.location}</p><p className="text-stone-500">Disponible todo el año</p></div>
        <span className="flex shrink-0 items-center gap-1 text-stone-800">★ <span>{listing.rating.toFixed(2)}</span></span>
      </div>
      <p className="text-sm text-stone-900"><strong>${listing.pricePerNight}</strong> <span className="text-stone-700">noche</span></p>
    </Link>
  );
};

export default ListingCard;
