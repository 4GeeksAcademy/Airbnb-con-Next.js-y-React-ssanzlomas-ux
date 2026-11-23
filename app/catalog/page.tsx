"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ListingCard from "@/components/ListingCard";
import MapPlaceholder from "@/components/MapPlaceholder";
import ResultsHeader from "@/components/ResultsHeader";
import { listings } from "@/types/data";

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const orderedListings = useMemo(() => [...listings].sort((a, b) => sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight), [sortOrder]);
  return <main className="min-h-screen bg-white px-4 py-4 md:px-8 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mb-3 flex items-center justify-between"><Link href="/" className="text-xl font-bold tracking-tight text-rose-600">stay somewhere</Link><Link href="/" className="rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-700">← Inicio</Link></div>
      <div className="mb-3"><h1 className="text-2xl font-semibold text-stone-900">Encuentra tu próxima estancia</h1><p className="mt-1 text-sm text-stone-500">Lugares especiales, seleccionados para ti.</p></div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-6">
        <section className="lg:col-span-7"><ResultsHeader totalResults={orderedListings.length} sortOrder={sortOrder} onSortChange={setSortOrder} /><div className="grid grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-1">{orderedListings.map((listing) => <ListingCard key={listing.id} listing={listing} compact />)}</div></section>
        <aside className="lg:col-span-5"><MapPlaceholder listings={orderedListings} /></aside>
      </div>
    </div>
  </main>;
};

export default CatalogPage;
