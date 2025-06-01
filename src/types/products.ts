import { DivideIcon as LucideIcon } from 'lucide-react';

export type ProductStatus = 'available' | 'coming_soon' | 'out_of_stock';

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  size: 'Large' | 'Medium' | 'Standard';
  price: number;
  status: ProductStatus;
  specs: {
    payload: string;
    speed: string;
    runtime: string;
    dimensions: string;
    weight: string;
    accuracy: string;
  };
}

export interface ProductType {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  status: ProductStatus;
  features: ProductFeature[];
  variants: ProductVariant[];
}