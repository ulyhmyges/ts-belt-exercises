import { optionFn4, value } from "../../option/ex4";

describe("optionFn4 Tests", () => {
  test("Check optionFn4 function", () => {
    const result = optionFn4(value);
    expect(result).toStrictEqual(value * 1.1);
  });

  test("Check optionFn4 - ", () => {
    const result = optionFn4(undefined);
    expect(result).toStrictEqual(null);
  });
});
