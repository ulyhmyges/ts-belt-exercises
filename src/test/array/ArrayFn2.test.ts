import { ArrayFn2, products } from "../../array/ex2";

describe("ArrayFn1 Tests", () => {
  test("Check ArrayFn1 function", () => {
    const result = ArrayFn2(products);
    expect(result).toStrictEqual({ name: "Mouse", price: 25, inStock: false }); // This should be the result of allInStock(products)
  });
});
