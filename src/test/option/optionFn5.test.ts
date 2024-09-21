import { optionFn5 } from "../../option/ex5";

describe("optionFn5 Tests", () => {
  test("Check optionFn5 function", () => {
    const result = optionFn5();
    expect(result).toStrictEqual(150);
  });
});
