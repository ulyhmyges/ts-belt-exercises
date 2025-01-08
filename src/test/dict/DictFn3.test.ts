import { DictFn3 } from "../../dict/ex3";

describe("DictFn3 Tests", () => {
  test("Delete all keys in a dict and check is empty", () => {
    const result = DictFn3();
    expect(result).toStrictEqual([1000]);
  });
});
