import { ArrayFn3, products } from "../../array/ex3";

describe("ArrayFn1 Tests", () => {
  test("Check ArrayFn1 function", () => {
    const result = ArrayFn3(products);
    expect(result).toStrictEqual([
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
    ]); // This should be the result of allInStock(products)
  });
});
