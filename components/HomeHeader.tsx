import CategoryBar from "@/components/CategoryBar";
import SearchBar from "@/components/SearchBar";
import type { Category } from "@/types/listing";

const HomeHeader = ({ query, onSearchChange, categories, selectedCategory, onSelectCategory }: {
  query: string;
  onSearchChange: (value: string) => void;
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}) => (
  <header className="sticky top-0 z-20 bg-white/95 px-4 pt-3 backdrop-blur-md"><SearchBar searchQuery={query} onSearchChange={onSearchChange} /><CategoryBar categories={categories} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} /></header>
);

export default HomeHeader;
