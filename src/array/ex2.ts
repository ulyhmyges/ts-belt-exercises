// // Exercice 2: Ajouter des produits et récupérer un élément à une position donnée
/// Utilise Array.prepend (pour ajouter le produit Monitor au début de la liste).
// Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).
// Utilise Array.at (pour récupérer le produit à l'indice 2).

import { Product } from "./type";
import { A, O, N, pipe } from "@mobily/ts-belt";
export const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];

export const ArrayFn2 = (arr: Product[]) => {
  return pipe(
    arr,
    A.prepend({ name: "Monitor", price: 500, inStock: true }),
    A.append({ name: "Keyboard", price: 100, inStock: false }),
    A.at(2),
  );
};
