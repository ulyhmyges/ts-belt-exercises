import { optionFn7 } from "../../option/ex7";

describe("optionFn7 Tests", () => {
  test("Check optionFn7 function", () => {
    const result = optionFn7();
    expect(result).toStrictEqual(["Inconnu", "Validé"]);
    //expect(result).toStrictEqual(150);
  });
});
