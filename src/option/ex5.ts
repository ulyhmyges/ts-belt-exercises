// // Exercice 5: Créer une option à partir d'une exécution, filtrer et extraire la valeur avec exception
// Fonctions à utiliser: fromExecution, filter, getExn
// Objectif: Transformer une exécution en option, filtrer les résultats supérieurs à 100,
// puis extraire la valeur avec exception si l'option est vide.

import { O, pipe, R } from "@mobily/ts-belt";

const riskyFunction = () => {
  if (Math.random() > 0.5) {
    return 150;
  }
  throw new Error("Erreur");
};
export const optionFn5 = () => {
  const fn = () =>
    pipe(
      O.fromExecution(riskyFunction),
      O.filter((val) => val > 100),
      O.getExn
    );

  return fn();
};
