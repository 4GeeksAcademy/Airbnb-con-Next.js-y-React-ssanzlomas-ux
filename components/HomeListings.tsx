import ListingCard from "@/components/ListingCard";
import LoadingState from "@/components/LoadingState";
import type { Listing } from "@/types/listing";

const HomeListings = ({ listings, isLoading }: { listings: Listing[]; isLoading: boolean }) => (
  isLoading ? <LoadingState message="Buscando alojamientos…" /> : listings.length ? <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <p className="py-16 text-center text-stone-500">No encontramos alojamientos. Prueba con otro destino.</p>
);

export default HomeListings;
