import { resultFn3 } from "../../result/ex3";

describe("resultFn3 Tests", () => {
  test("both values = null", () => {
    const value = null;
    const value2 = null;
    const result = resultFn3(value, value2);
    expect(result).toStrictEqual([-1, -1]);
  });

  test("value2=null", () => {
    const value = 100;
    const value2 = null;
    const result = resultFn3(value, value2);
    expect(result).toStrictEqual([90, -1]);
  });

  test("value1=null", () => {
    const value = null;
    const value2 = 200;
    const result = resultFn3(value, value2);
    expect(result).toStrictEqual([-1, 190]);
  });
});
