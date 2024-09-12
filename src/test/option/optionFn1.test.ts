import { item, optionFn1, optionFn11 } from "../../option/ex1";

describe("optionFn1 Tests", () => {
  test("Check ArrayFn1 function", () => {
    const result = optionFn1(item);
    expect(result).toStrictEqual(item);
  });

  test("Check ArrayFn11 function", () => {
    const result = optionFn11(item);
    expect(result).toStrictEqual("No Item");
  });
});
