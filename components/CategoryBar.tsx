import type { Category } from "@/types/listing";

const CategoryBar = ({ categories, selectedCategory, onSelectCategory }: { categories: Category[]; selectedCategory: string; onSelectCategory: (id: string) => void }) => (
  <nav aria-label="Categorías" className="scrollbar-hide flex gap-7 overflow-x-auto border-b border-stone-200 px-4 pt-2">
    {categories.map((category) => <button key={category.id} onClick={() => onSelectCategory(category.id)} className={`flex shrink-0 flex-col items-center gap-2 border-b-2 px-1 pb-3 text-xs transition ${selectedCategory === category.id ? "border-stone-900 font-semibold text-stone-900" : "border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-900"}`}><span className="text-xl" aria-hidden="true">{category.icon}</span><span>{category.label}</span></button>)}
  </nav>
);

export default CategoryBar;
