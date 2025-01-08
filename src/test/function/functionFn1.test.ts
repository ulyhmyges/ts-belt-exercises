import { functionFn1 } from "../../function/ex1";

const calls = 3;

describe("functionFn1 Tests", () => {
  test("", () => {
    const result1 = functionFn1(calls);
    expect(result1).toStrictEqual("undefined");
  });
});
