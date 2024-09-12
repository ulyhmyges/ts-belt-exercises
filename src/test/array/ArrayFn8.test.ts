import { ArrayFn8, products } from "../../array/ex8";

describe("ArrayFn8 Tests", () => {
  test("Check - value - ArrayFn8 function", () => {
    const result = ArrayFn8(products, "Laptop");
    expect(result).toStrictEqual({
      name: "Laptop",
      price: 1000,
      inStock: true,
    });
  });

  test("Check - DefaultValue - ArrayFn8 function", () => {
    const result = ArrayFn8(products, "toto");
    expect(result).toStrictEqual({ name: "" });
  });
});
