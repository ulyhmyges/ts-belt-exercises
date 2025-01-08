// Exercice 6: Créer une option à partir d'une promesse, appliquer une fonction, et récupérer la valeur avec une exception
// Fonctions à utiliser : fromPromise, map, getExn
// Objectif : Créer une option à partir d'une promesse, appliquer une transformation qui ajoute ' reçu' au résultat, puis extraire la valeur avec exception.

import { O, pipe, F, R, G } from "@mobily/ts-belt";

const fetchData = async () => {
  if (Math.random() > 0.5) {
    return "Données";
  }
  throw new Error("Erreur");
};

export const optionFn6 = async () => {
  const opt = await O.fromPromise(fetchData().then((x) => x));
  const fun = (option: any) => {
    return pipe(
      option,
      O.map((str) => {
        return `${str} reçu`;
      }),
      O.getExn
    );
  };
  return pipe(
    opt,
    F.tryCatch(fun),
    R.match(
      (str) => str,
      () => "error"
    )
  );
};
