describe("ArrayFn8 Tests", () => {
  test("Check ArrayFn8 function", () => {
    const result = ArrayFn8(inventory1, inventory2);
    expect(result).toStrictEqual([
      [
        { name: "Laptop", price: 1000, inStock: true },
        { name: "Mouse", price: 25, inStock: false },
      ],
      [{ name: "Keyboard", price: 75, inStock: true }],
      [
        { name: "Laptop", price: 1000, inStock: true },
        { name: "Mouse", price: 25, inStock: false },
        { name: "Keyboard", price: 75, inStock: true },
        { name: "Monitor", price: 200, inStock: false },
      ],
    ]);
  });
});
