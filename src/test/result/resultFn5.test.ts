import { resultFn5 } from "../../result/ex5";

describe("resultFn5 Tests", () => {
  test("resultFn5", () => {
    const result = resultFn5();
    expect([75, undefined]).toContain(result);
  });
});
