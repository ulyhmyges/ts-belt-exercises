import { ArrayFn5, products } from "../../array/ex5";

describe("ArrayFn5 Tests", () => {
  test("Check ArrayFn5 function", () => {
    const result = ArrayFn5(products);
    expect(result).toStrictEqual([
      { name: "Monitor", price: 200, inStock: true },
    ]);
  });
});
