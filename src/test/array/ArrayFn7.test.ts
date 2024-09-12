import { ArrayFn7, products } from "../../array/ex7";

describe("ArrayFn7 Tests", () => {
  test("Check ArrayFn7 function", () => {
    const result = ArrayFn7(products);
    expect(result).toStrictEqual([
      { name: "Keyboard", price: 125, inStock: true },
    ]);
  });
});
