import { functionFn2 } from "../../function/ex2";
const number = 11;
describe("functionFn2 Tests", () => {
  test("", () => {
    const result = functionFn2(number);
    expect(result).toStrictEqual(11);
  });

  test("", () => {
    const result = functionFn2(12);
    expect(result).toStrictEqual(undefined);
  });
});
