// Exercice 4: Appliquer une action seulement si une condition est vraie
// Fonctions à utiliser : ifElse, identity, tap
// Objectif : Si un nombre est pair, multiplie-le par 2 et affiche 'Nombre pair'. Sinon, retourne 'Non pair' et l'identité.
// Données :

// const number = 7;

import { F, pipe } from "@mobily/ts-belt";
export const functionFn4 = (number: number) => {
  return pipe(
    number,
    F.ifElse(
      (n: number) => n % 2 === 0,
      (x: number) => x * 2,
      (x: number) => {
        console.log("Non pair");
        return x;
      }
    )
  );
};
