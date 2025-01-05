// // Exercice 3: Aplatir deux Result, vérifier et récupérer une valeur par défaut
// Fonctions à utiliser: flatMap, recover, map, getWithDefault
// Objectif: Aplatir deux Result avec flatMap, appliquer une transformation sur la valeur,
// puis récupérer une valeur par défaut si l'une des valeurs échoue.

import { R, O, pipe } from "@mobily/ts-belt";
type User = { name: string; age: number } | null;

const result1 = R.fromNullable(100, "error");
const result2 = R.fromNullable(200);
const obj: User = { name: "Joe", age: 20 };
export const resultFn3 = (value1: number | null, value2: number | null) => {
  let opt1 = pipe(
    // ⬇️ const obj: User = { name: null, age: 20 }
    R.fromNullable(value1, "error"),
    R.flatMap((val: number) => {
      return val ? R.Ok(val - 10) : R.Error<string>("err");
    }),
    R.recover<number, string>(-1),
    R.toOption
  );

  let opt2 = pipe(
    // ⬇️ const obj: User = { name: null, age: 20 }
    R.fromNullable(value2, "error"),
    R.flatMap((val: number) => {
      return val ? R.Ok(val - 10) : R.Error<string>("err");
    }),
    R.recover<number, string>(-1),
    R.toOption
  );

  return pipe(opt1, O.zip(opt2));
};
