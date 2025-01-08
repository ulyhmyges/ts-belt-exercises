// Exercice 2: Appliquer plusieurs prédicats et vérifier si tous sont satisfaits
// Fonctions à utiliser : allPass, tap, when, identity
// Objectif : Vérifie si un nombre est supérieur à 10 et est pair.
// Si oui, affiche 'Validé', sinon retourne simplement la valeur d'origine avec identity.

import { F, pipe } from "@mobily/ts-belt";

// const number = 12;
const predicates = [(n: number) => n > 10, (n: number) => n % 2 === 0];
export const functionFn2 = (number: number) => {
  return pipe(
    number,
    F.when(F.allPass(predicates), (x) => console.log("Validé")),
    F.identity
  );
};
