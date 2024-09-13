import { optionFn3, value1, value2 } from "../../option/ex3";

describe("optionFn3 Tests", () => {
  test("Check optionFn3 function", () => {
    const result = optionFn3(value1, value2);
    expect(result).toStrictEqual(`${value1}.${value2}`);
  });
});
