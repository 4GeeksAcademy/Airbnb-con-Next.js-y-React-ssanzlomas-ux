"use client";

import { useEffect, useMemo, useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeListings from "@/components/HomeListings";
import { categories, listings as sampleListings } from "@/types/data";
import type { Listing } from "@/types/listing";

const HomeExperience = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(sampleListings);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const visibleListings = useMemo(() => listings.filter((listing) => {
    const matchesCategory = category === "all" || listing.category === category;
    const matchesQuery = `${listing.title} ${listing.location}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, listings, query]);

  return <div className="flex min-h-screen flex-col bg-white">
    <HomeHeader query={query} onSearchChange={setQuery} categories={categories} selectedCategory={category} onSelectCategory={setCategory} />
    <main className="flex-1 px-4 py-5 md:px-8 lg:px-10">
      <div className="mb-5 flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">Estancias que inspiran</p><h1 className="mt-1 text-2xl font-semibold tracking-tight text-stone-900">Descubre tu próximo lugar</h1></div><span className="hidden text-sm text-stone-500 sm:block">Alojamientos únicos, en cualquier lugar</span></div>
      <HomeListings listings={visibleListings} isLoading={isLoading} />
    </main>
    <footer className="border-t border-stone-200 bg-stone-50 px-4 py-6 text-xs text-stone-500"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3"><span>© 2026 Stay Somewhere, Inc.</span><span>Privacidad · Términos · Ayuda</span></div></footer>
  </div>;
};

export default HomeExperience;
