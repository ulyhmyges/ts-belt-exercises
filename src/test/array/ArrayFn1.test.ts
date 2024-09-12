import { ArrayFn1, products } from "../../array/ex1";

describe("ArrayFn1 Tests", () => {
  test("Check ArrayFn1 function", () => {
    const result = ArrayFn1(products);
    expect(result).toStrictEqual([3, false]); // This should be the result of allInStock(products)
  });
});
