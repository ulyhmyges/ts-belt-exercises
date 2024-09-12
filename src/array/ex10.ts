// // Exercice 10: Insérer des produits à des positions spécifiques
// Utilise Array.insertAt(pour insérer un produit à l'indice 1).
// Utilise Array.prependToAll(pour ajouter un produit à chaque élément d'une liste).
// Utilise Array.append(pour ajouter un produit à la fin de la liste)

import { Product } from "./type";
import { A, O, pipe } from "@mobily/ts-belt";

export const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn10 = <T>(arr: T[], index: number, value: T, delimiter: T) =>
  pipe(
    arr,
    A.insertAt(index, value),
    A.prependToAll(delimiter),
    A.append(value)
  );
