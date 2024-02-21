
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number; 
}




export const products: Product[] = [
  {
    id: 1,
    name: 'Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
    price: 799,
    description: 'A great notebook',
    rating: 4.5 // Add rating for this product
  },
  {
    id: 2,
    name: 'Apple MacBook Air 13 MGN93 серебристый',
    price: 699,
    description: 'An amazing notebook',
    rating: 4.8 // Add rating for this product
  },
  {
    id: 3,
    name: 'Chuwi HeroBook Pro 14.1 B08316YSKH серебристый',
    price: 299,
    description: 'Potolok notebook',
    rating: 3.9 // Add rating for this product
  },
  // Add more products with ratings below
  {
    id: 4,
    name: 'Dell XPS 13',
    price: 1299,
    description: 'Powerful and sleek ultrabook',
    rating: 4.7
  },
  {
    id: 5,
    name: 'HP Spectre x360',
    price: 1199,
    description: 'Convertible laptop with stunning design',
    rating: 4.6
  },
  {
    id: 6,
    name: 'Asus ROG Zephyrus G14',
    price: 1499,
    description: 'Gaming laptop with exceptional performance',
    rating: 4.9
  },
  {
    id: 7,
    name: 'Microsoft Surface Laptop 4',
    price: 999,
    description: 'Premium ultrabook with excellent build quality',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Acer Predator Helios 300',
    price: 1099,
    description: 'High-performance gaming laptop at a great value',
    rating: 4.3
  },
  {
    id: 9,
    name: 'Razer Blade 15',
    price: 1999,
    description: 'Sleek gaming laptop with top-notch features',
    rating: 4.8
  },
  {
    id: 10,
    name: 'Samsung Galaxy Book Pro 360',
    price: 1299,
    description: 'Convertible laptop with AMOLED display',
    rating: 4.7
  }
];




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/