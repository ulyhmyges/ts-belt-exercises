// Exercice 5: Créer un objet à partir d'un tableau de paires
// Fonctions à utiliser : fromPairs, toPairs
// Objectif : Transformer un tableau de paires [clé, valeur] en un objet, puis vérifier en retournant le tableau des paires.

import { D, pipe } from "@mobily/ts-belt";
type pp = [string, string | number | boolean][];
const pairs: pp = [
  ["name", "Laptop"],
  ["price", 1000],
  ["stock", true],
];
export const DictFn5 = () => {
  return pipe(pairs, D.fromPairs, D.toPairs);
};
