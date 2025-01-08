import { DictFn2 } from "../../dict/ex2";

describe("DictFn2 Tests", () => {
  test("Delete all keys in a dict and check is empty", () => {
    const result = DictFn2();
    expect(result).toStrictEqual(true);
  });
});
