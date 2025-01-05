// // Exercice 5: Manipuler un Result à partir d'une exécution et convertir en option
// Fonctions à utiliser : fromExecution, map, toOption
// Objectif : Transformer une exécution en Result, appliquer une transformation, puis convertir le résultat en option.

import { R, pipe } from "@mobily/ts-belt";

const riskyFunction = () => {
  if (Math.random() > 0.5) {
    return 150;
  }
  throw new Error("Erreur");
};

export const resultFn5 = () => {
  return pipe(
    R.fromExecution(riskyFunction),
    R.map((val) => val / 2),
    R.toOption
  );
};
