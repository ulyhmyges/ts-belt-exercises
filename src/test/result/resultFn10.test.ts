import { resultFn10 } from "../../result/ex10";

describe("resultFn10 Tests", () => {
  test("resultFn10 with value", () => {
    const val = 150;
    const result = resultFn10(val);
    expect(15).toStrictEqual(result);
  });

  test("resultFn10 with null value", () => {
    const val = null;
    const result = resultFn10(val);
    expect(-1).toStrictEqual(result);
  });
});
