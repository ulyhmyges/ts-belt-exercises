// // Exercice 7: Filtrer les produits par condition et index
// Utilise Array.filter(pour garder uniquement les produits en stock).
// Utilise Array.filterWithIndex(pour garder les produits à des indices pairs).
// Utilise Array.filterMap(pour appliquer une transformation sur les produits filtrés).

import { Product } from "./type";
import { A, O, pipe } from "@mobily/ts-belt";

export const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
];

export const ArrayFn7 = (arr: Product[]) => {
  const filter = pipe(
    arr,
    A.filter((v) => v.inStock === true)
  );
  return pipe(
    A.filterWithIndex(filter, (i, v) => i % 2 !== 0),
    A.filterMap((v) =>
      v.price > 25 && (v.price = v.price + 50) ? O.Some(v) : O.None
    )
  );
};
