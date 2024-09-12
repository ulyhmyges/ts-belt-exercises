import {
  ArrayFn9,
  ArrayFn91,
  nestedProducts,
  nestedProducts2,
} from "../../array/ex9";

describe("ArrayFn9 Tests", () => {
  test("Check - A.flat - ArrayFn9function", () => {
    const result = ArrayFn9(nestedProducts);
    expect(result).toStrictEqual([
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
      { name: "Keyboard", price: 75, inStock: true },
      { name: "Monitor", price: 200, inStock: true },
    ]);
  });

  test("Check - A.deepFlat - ArrayFn9function", () => {
    const result = ArrayFn91(nestedProducts2);
    expect(result).toStrictEqual([
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
      { name: "Keyboard", price: 75, inStock: true },
      { name: "Monitor", price: 200, inStock: true },
      { name: "Laptop", price: 1000, inStock: true },
      { name: "Mouse", price: 25, inStock: false },
      { name: "Keyboard", price: 75, inStock: true },
      { name: "Monitor", price: 200, inStock: true },
    ]);
  });
});
