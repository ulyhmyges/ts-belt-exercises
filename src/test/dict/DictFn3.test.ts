import { DictFn3 } from "../../dict/ex3";

describe("DictFn3 Tests", () => {
  test("Filter a dict with number values and return them", () => {
    const result = DictFn3();
    expect(result).toStrictEqual([1000]);
  });
});
