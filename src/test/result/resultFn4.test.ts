import { resultFn4 } from "../../result/ex4";

describe("resultFn4 Tests", () => {
  test("value = null", () => {
    const value = null;
    const result = resultFn4(value);
    expect(result).toStrictEqual("Erreur nullable");
  });

  test("with value", () => {
    const value = "Some value";
    const result = resultFn4(value);
    expect(result).toStrictEqual("defaultValue");
  });
});
