// // Exercice 8: Trouver des produits selon des critères
// Utilise Array.find(pour trouver le produit dont le nom est Keyboard).
// Utilise Array.getIndexBy(pour trouver l'indice du produit dont le prix est 1000).
// Utilise Array.get(pour récupérer le produit à l'indice 2)

import { Product } from "./type";
import { A, pipe, O } from "@mobily/ts-belt";

export const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn8 = <T extends { name: string }>(
  arr: T[],
  _name: string
) => {
  return pipe(
    arr,
    A.find((_v) => _v.name === _name),
    O.getWithDefault({ name: "" })
  );
};

export const ArrayFn81 = <T extends { price: number }>(
  arr: T[],
  _price: number
): number =>
  pipe(
    arr,
    A.getIndexBy((_v) => _v.price < _price),
    O.getWithDefault(Number(-1))
  );

export const ArrayFn82 = <T extends { price: number }>(
  arr: T[],
  index: number
) => pipe(arr, A.get(index), O.getWithDefault({ price: 0 }));
