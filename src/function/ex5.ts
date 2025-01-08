// Exercice 5: Exécuter deux fonctions et vérifier si au moins une est vraie
// Fonctions à utiliser : either, debounce, identity
// Objectif : Vérifie si un nombre est pair ou supérieur à 20. Si oui, affiche 'Condition remplie'. Sinon, renvoie la valeur avec identity.
// Données :

import { F, pipe } from "@mobily/ts-belt";
const number = 18;
export const functionFn5 = () => {
  return pipe(
    number,
    F.when(
      F.either(
        (n: number) => n % 2 === 0,
        (n: number) => n > 20
      ),
      F.identity
    )
  );
};
