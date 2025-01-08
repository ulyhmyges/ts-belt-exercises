import { optionFn6 } from "../../option/ex6";

describe("optionFn6 Tests", () => {
  test("Check optionFn6 function", async () => {
    const result = await optionFn6();
    expect(["Données reçu"]).toContain(result);
    //expect(result).toStrictEqual(150);
  });
});
