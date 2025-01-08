// Exercice 2: Supprimer plusieurs clés et vérifier leur absence
// Fonctions à utiliser : deleteKeys, keys
// Objectif : Supprimer les clés 'price' et 'stock' de l'objet obj, puis vérifier que ces clés ne sont plus présentes dans l'objet.

import { pipe, D } from "@mobily/ts-belt";

type Ti = { name: string; price: number; brand: string };
const obj = { name: "Laptop", price: 1000, stock: true, brand: "Dell" };
export const DictFn2 = () => {
  return pipe(obj, D.deleteKeys(D.keys(obj)), D.isEmpty);
};
