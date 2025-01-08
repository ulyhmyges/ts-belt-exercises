import { DictFn4 } from "../../dict/ex4";

describe("DictFn4 Tests", () => {
  test("filter dict with key startswith 'p'", () => {
    const result = DictFn4();
    expect(result).toStrictEqual(["price", "processor"]);
  });
});
