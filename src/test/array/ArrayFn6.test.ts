import { ArrayFn6, ArrayFn61, products1, products2 } from "../../array/ex6";
import { Product } from "../../array/type";

describe("ArrayFn6 Tests", () => {
  test("Check A.eq products1, products2", () => {
    const result = ArrayFn6(products1, products2);
    expect(result).toStrictEqual(false);
  });

  test("Check A.eq products1, products1", () => {
    const result = ArrayFn6(products1, products1);
    expect(result).toStrictEqual(true);
  });

  test("Check A.includes products1, ", () => {
    const value: Product = {
      name: "Mouse",
      price: 25,
      inStock: false,
    };
    const result = ArrayFn61(products1, value);
    expect(result).toStrictEqual(true);
  });
});
