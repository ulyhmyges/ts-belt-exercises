import { DictFn5 } from "../../dict/ex5";

describe("DictFn5 Tests", () => {
  test("Converts pairs into a dict and return pairs from dict", () => {
    const result = DictFn5();
    expect(result).toStrictEqual([
      ["name", "Laptop"],
      ["price", 1000],
      ["stock", true],
    ]);
  });
});
