export interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  imageUrl: string;
  category?: string;
  photos?: string[];
  reviewsCount?: number;
  hostName?: string;
  yearsHosting?: number;
  amenities?: { icon: string; label: string }[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface SearchCriteria {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}
