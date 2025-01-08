import { DictFn1 } from "../../dict/ex1";

describe("DictFn1 Tests", () => {
  test("Delete a key in a dict and then try to get the value associated", () => {
    const result = DictFn1();
    expect(result).toStrictEqual(undefined);
  });
});
