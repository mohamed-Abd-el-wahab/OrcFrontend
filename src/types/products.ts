import { LucideIcon } from 'lucide-react';

export type ProductStatus = 'available' | 'coming_soon' | 'out_of_stock';
export type ProductEdition = 'Normal' | 'Pro';
export type ProductSize = 'Small' | 'Medium' | 'Large';

export interface ProductFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhatsInTheBox {
  title: string;
  description: string;
  items: string[];
  color: string; // For color coding different variants
}

export interface ProductVariant {
  id: string;
  name: string;
  edition: ProductEdition;
  size: ProductSize;
  price: number;
  status: ProductStatus;
  specs: {
    payload: string;
    speed: string;
    runtime: string;
    dimensions: string;
    weight: string;
    accuracy: string;
    controller?: string;
    motors?: string;
    communication?: string;
    battery?: string;
    addons?: string;
    firmware?: string;
    safety?: string;
  };
  whatsInTheBox: WhatsInTheBox;
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