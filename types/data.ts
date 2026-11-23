import type { Category, Listing } from "./listing";

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "✦" },
  { id: "beach", label: "Playa", icon: "🏖️" },
  { id: "cabin", label: "Cabañas", icon: "🏡" },
  { id: "views", label: "Vistas", icon: "⛰️" },
  { id: "pool", label: "Piscinas", icon: "🏊" },
  { id: "design", label: "Diseño", icon: "🪴" },
  { id: "city", label: "Ciudad", icon: "🏙️" },
];

export const listings: Listing[] = [
  { id: "1", title: "Villa luminosa junto al mar", location: "Sayulita, México", pricePerNight: 184, rating: 4.96, category: "beach", imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85", reviewsCount: 128, hostName: "Lucía", yearsHosting: 6, amenities: [{ icon: "🌊", label: "Acceso a la playa" }, { icon: "📶", label: "Wifi rápido" }, { icon: "🏊", label: "Piscina privada" }, { icon: "🍳", label: "Cocina equipada" }] },
  { id: "2", title: "Refugio entre las montañas", location: "Valle de Bravo, México", pricePerNight: 132, rating: 4.91, category: "cabin", imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85", reviewsCount: 86, hostName: "Mateo", yearsHosting: 4 },
  { id: "3", title: "Casa serena con piscina", location: "Tulum, México", pricePerNight: 210, rating: 4.98, category: "pool", imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85", reviewsCount: 203, hostName: "Sofía", yearsHosting: 8 },
  { id: "4", title: "Loft de diseño en el centro", location: "Oaxaca, México", pricePerNight: 96, rating: 4.87, category: "design", imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", reviewsCount: 54, hostName: "Diego", yearsHosting: 3 },
  { id: "5", title: "Cabaña con vista al bosque", location: "Tapalpa, México", pricePerNight: 118, rating: 4.94, category: "views", imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85", reviewsCount: 72, hostName: "Ana", yearsHosting: 5 },
  { id: "6", title: "Casa mediterránea frente al mar", location: "Todos Santos, México", pricePerNight: 245, rating: 4.99, category: "beach", imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=85", reviewsCount: 147, hostName: "Nicolás", yearsHosting: 7 },
  { id: "7", title: "Apartamento con terraza", location: "Ciudad de México", pricePerNight: 89, rating: 4.89, category: "city", imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", reviewsCount: 93, hostName: "Valentina", yearsHosting: 2 },
  { id: "8", title: "Casa escondida en la selva", location: "Puerto Escondido, México", pricePerNight: 168, rating: 4.95, category: "pool", imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85", reviewsCount: 61, hostName: "Emilio", yearsHosting: 4 },
];
