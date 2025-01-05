import { resultFn6 } from "../../result/ex6";

describe("resultFn6 Tests", () => {
  test("resultFn6", () => {
    const result = resultFn6();
    expect("[Error]: nullable").toStrictEqual(result);
  });
});
