import { DictFn7 } from "../../dict/ex7";

describe("DictFn7 Tests", () => {
  test("Delete all keys of a dict and check is empty", () => {
    const result = DictFn7();
    expect(result).toStrictEqual(true);
  });
});
