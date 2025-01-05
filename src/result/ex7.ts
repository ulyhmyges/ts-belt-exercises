// // Exercice 7: Manipuler un Result d'une promesse et récupérer la valeur avec une exception
// Fonctions à utiliser : fromPromise, map, getExn
// Objectif : Transformer une promesse en Result, appliquer une transformation, puis récupérer la valeur avec exception si le Result échoue.

import { R, pipe } from "@mobily/ts-belt";

const fetchData = async (): Promise<string> => {
  if (Math.random() > 0.5) {
    return "Données";
  }
  throw new Error("Erreur");
};

export const resultFn7 = async () => {
  try {
    return pipe(
      await R.fromPromise(fetchData()),
      R.map((val) => {
        return `Mes ${val}`;
      }),
      R.getExn
    );
  } catch (error: any) {
    return `Error occurred: ${error.message}`;
  }
};
