import type { Listing } from "@/types/listing";

const ListingHeader = ({ listing }: { listing: Listing }) => (
  <section className="py-5"><h1 className="text-2xl font-semibold tracking-tight text-stone-900">{listing.title}</h1><p className="mt-2 text-sm text-stone-600"><span className="text-stone-900">★ {listing.rating.toFixed(2)}</span> · {listing.reviewsCount ?? 0} reseñas · {listing.location}</p></section>
);

export default ListingHeader;
