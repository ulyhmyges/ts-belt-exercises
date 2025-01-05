// // Exercice 1: Vérifier si tous les produits sont en stock et leur nombreUtilise Array.all (pour vérifier si tous les produits sont en stock).Utilise Array.any (pour vérifier si au moins un produit n’est pas en stock).Utilise Array.length (pour obtenir le nombre total de produits).

import { Product } from "./type";
import { A, O, N, pipe } from "@mobily/ts-belt";

export const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const allInStock = (x: Product[]): boolean =>
  A.all(products, (x: Product) => x.inStock === true);

export const someInStock = (x: Product[]): boolean =>
  A.any(products, (x: Product) => x.inStock === true);

export const ArrayFn1 = (arr: Product[]) => {
  return [
    pipe(
      arr, // Apply first function
      A.length // Then apply second function
    ),
    allInStock(arr),
  ];
};
