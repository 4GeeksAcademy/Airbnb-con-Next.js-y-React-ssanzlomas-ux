import AmenitiesGrid from "@/components/AmenitiesGrid";
import BackButton from "@/components/BackButton";
import BookingCard from "@/components/BookingCard";
import HostInfo from "@/components/HostInfo";
import ListingHeader from "@/components/ListingHeader";
import PhotoGallery from "@/components/PhotoGallery";
import type { Listing } from "@/types/listing";

const RoomDetail = ({ listing }: { listing: Listing }) => {
  const photos = listing.photos?.length ? listing.photos : [listing.imageUrl, listing.imageUrl, listing.imageUrl];
  const amenities = listing.amenities ?? [{ icon: "📶", label: "Wifi" }, { icon: "🍳", label: "Cocina" }, { icon: "🛏️", label: "Dormitorio cómodo" }, { icon: "🅿️", label: "Estacionamiento" }];
  return <main className="flex min-h-screen flex-col pb-24 sm:pb-8"><div className="mx-auto w-full max-w-5xl"><BackButton /><PhotoGallery photos={photos} title={listing.title} /><div className="px-4"><ListingHeader listing={listing} /><HostInfo hostName={listing.hostName ?? "Tu anfitrión"} yearsHosting={listing.yearsHosting ?? 3} /><AmenitiesGrid amenities={amenities} /><section className="border-t border-stone-200 py-5"><h2 className="text-lg font-semibold text-stone-900">Una estancia para recordar</h2><p className="mt-2 text-sm leading-relaxed text-stone-600">Disfruta de este espacio único, preparado con cariño para que vivas una experiencia inolvidable en {listing.location}.</p></section><BookingCard pricePerNight={listing.pricePerNight} minGuests={1} maxGuests={8} /></div></div></main>;
};

export default RoomDetail;
