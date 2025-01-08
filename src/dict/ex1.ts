// Exercice 1: Supprimer une clé d'un objet
// Fonctions à utiliser : deleteKey, get
// Objectif : Supprimer la clé 'price' de l'objet obj et vérifier que la valeur associée n'est plus accessible.

import { D, pipe } from "@mobily/ts-belt";
type To = { name: string; price?: number; stock: boolean };
const objf = { name: "Laptop", price: 1000, stock: true };
export const DictFn1 = () => {
  const dico: To = pipe(objf, D.deleteKey("price"));
  return pipe(dico, D.get("price"));
};
