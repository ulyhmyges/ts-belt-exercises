// Exercice 7: Vérifier si un objet est vide après suppression de ses clés
// Fonctions à utiliser : deleteKeys, isEmpty
// Objectif : Supprimer toutes les clés de l'objet obj et vérifier si l'objet résultant est vide.

import { D, pipe } from "@mobily/ts-belt";
const obj = { name: "Laptop", price: 1000, stock: true };
export const DictFn7 = () => {
  return pipe(obj, D.deleteKeys(D.keys(obj)), D.isEmpty);
};
