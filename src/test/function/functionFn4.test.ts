import { functionFn4 } from "../../function/ex4";

describe("functionFn4 Tests", () => {
  test("", () => {
    const result = functionFn4(7);
    expect(result).toStrictEqual(7);
  });

  test("", () => {
    const result = functionFn4(8);
    expect(result).toStrictEqual(16);
  });
});
