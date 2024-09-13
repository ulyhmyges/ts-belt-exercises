import { optionFn2, value } from "../../option/ex2";

describe("optionFn2 Tests", () => {
  test("Check ArrayFn2 function", () => {
    const result = optionFn2(value);
    expect(result).toStrictEqual(value * 2);
  });

  test("Check ArrayFn2 function", () => {
    const result = optionFn2(40);
    expect(result).toStrictEqual(0);
  });
});
