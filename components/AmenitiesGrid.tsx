const AmenitiesGrid = ({ amenities }: { amenities: { icon: string; label: string }[] }) => (
  <section className="border-t border-stone-200 py-5"><h2 className="mb-3 text-lg font-semibold text-stone-900">Lo que ofrece este lugar</h2><div className="grid grid-cols-2 gap-3">{amenities.map((amenity) => <div key={amenity.label} className="flex items-center gap-2 text-sm text-stone-700"><span>{amenity.icon}</span><span>{amenity.label}</span></div>)}</div></section>
);

export default AmenitiesGrid;
