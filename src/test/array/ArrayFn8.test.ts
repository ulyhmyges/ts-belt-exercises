import { ArrayFn8, ArrayFn81, ArrayFn82, products } from "../../array/ex8";

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

  test("Check - value - ArrayFn81 function", () => {
    const result = ArrayFn81(products, 50);
    expect(result).toStrictEqual(1);
  });

  test("Check - DefaultValue - ArrayFn81 function", () => {
    const result = ArrayFn81(products, 10);
    expect(result).toStrictEqual(-1);
  });

  test("Check - value - ArrayFn82 function", () => {
    const result = ArrayFn82(products, 2);
    expect(result).toStrictEqual({
      inStock: true,
      name: "Keyboard",
      price: 75,
    });
  });

  test("Check - DefaultValue - ArrayFn82 function", () => {
    const result = ArrayFn82(products, 10);
    expect(result).toStrictEqual({ price: 0 });
  });
});
