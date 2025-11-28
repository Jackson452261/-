import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'lnk8ymnf',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Product types
export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  category: string;
  price: number;
  originalPrice?: number;
  image: SanityImageSource;
  images?: SanityImageSource[];
  rating: number;
  reviews: number;
  description?: string;
  features?: string[];
  specifications?: {
    frameMaterial?: string;
    weight?: string;
    drivetrain?: string;
    brakes?: string;
    wheels?: string;
    tires?: string;
    handlebars?: string;
    saddle?: string;
  };
  sizes?: string[];
  colors?: string[];
  isBestseller?: boolean;
  isNew?: boolean;
}

// Queries
export const productsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  category,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  features,
  isBestseller,
  isNew
}`;

export const productDetailQuery = `*[_type == "product" && _id == $id][0] {
  _id,
  name,
  slug,
  category,
  price,
  originalPrice,
  image,
  images,
  rating,
  reviews,
  description,
  features,
  specifications,
  sizes,
  colors,
  isBestseller,
  isNew
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  category,
  price,
  originalPrice,
  image,
  images,
  rating,
  reviews,
  description,
  features,
  specifications,
  sizes,
  colors,
  isBestseller,
  isNew
}`;
