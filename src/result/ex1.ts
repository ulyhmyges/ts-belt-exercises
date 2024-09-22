// // Exercice 1: Transformer une exécution en Result,
// appliquer une transformation, puis obtenir la valeur par défaut
// Fonctions à utiliser: fromExecution, map, getWithDefault
// Objectif: Transformer une exécution en Result, appliquer une transformation qui multiplie la valeur par 2, puis récupérer une valeur par défaut si l'exécution échoue.

import { R, pipe, O } from "@mobily/ts-belt";

const riskyFunction = () => {
  if (Math.random() > 0.5) {
    return 100;
  }
  throw new Error("Erreur");
};
export const resultFn1 = () => {
  return pipe(
    R.fromExecution(riskyFunction),
    R.map((x) => x * 2),
    R.getWithDefault(Number(-1))
  );
};
