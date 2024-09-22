import { resultFn2 } from "../../result/ex2";

describe("resultFn2 Tests", () => {
  test("Check resultFn2 - value=null", () => {
    const value = null;
    const result = resultFn2(value);
    expect(result).toStrictEqual("defaultValue");
  });

  test("Check resultFn2 - value=hello", () => {
    const value = "hello";
    const result = resultFn2(value);
    expect(result).toStrictEqual("hello toto");
  });
});
