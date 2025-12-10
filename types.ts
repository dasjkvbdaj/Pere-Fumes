export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number; // Keep for fallback, represents base price
  originalPrice?: number;
  gender: 'Men' | 'Women' | 'Unisex';
  scentType: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Citrus' | 'Spicy';
  description: string;
  image: string;
  rating: number;
  reviews: number;
  notes: string[];
  sizes: ProductSize[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: ProductSize;
}

export type FilterState = {
  gender: string[];
  brand: string[];
  scentType: string[];
  maxPrice: number;
};