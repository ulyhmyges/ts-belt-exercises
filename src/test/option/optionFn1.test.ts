import { item, optionFn1, optionFn11 } from "../../option/ex1";

describe("optionFn1 Tests", () => {
  test("Check optionFn1 function", () => {
    const result = optionFn1(item);
    expect(result).toStrictEqual(item);
  });

  test("Check optionFn11 function", () => {
    const result = optionFn11(item);
    expect(result).toStrictEqual("No Item");
  });

  test("Check optionFn12 function", () => {
    const result = optionFn1(item);
    expect(result).toStrictEqual(item);
  });
});
