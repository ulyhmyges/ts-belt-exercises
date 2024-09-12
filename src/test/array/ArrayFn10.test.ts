import { products } from "../../array/ex1";
import { ArrayFn10 } from "../../array/ex10";

describe("ArrayFn10 Tests", () => {
  test("Check ArrayFn10 function", () => {
    const value = { name: "insert_value", price: 10, inStock: true };
    const index = 3;
    const delimiter = { name: "delimiter", price: 112, inStock: true };
    const result = ArrayFn10(products, index, value, delimiter);
    expect(result).toStrictEqual([
      {
        inStock: true,
        name: "delimiter",
        price: 112,
      },
      {
        inStock: true,
        name: "Laptop",
        price: 1000,
      },
      {
        inStock: true,
        name: "delimiter",
        price: 112,
      },
      {
        inStock: false,
        name: "Mouse",
        price: 25,
      },
      {
        inStock: true,
        name: "delimiter",
        price: 112,
      },
      {
        inStock: true,
        name: "Keyboard",
        price: 75,
      },
      {
        inStock: true,
        name: "delimiter",
        price: 112,
      },
      {
        inStock: true,
        name: "insert_value",
        price: 10,
      },
      { inStock: true, name: "insert_value", price: 10 },
    ]);
  });
});
