import { DictFn6 } from "../../dict/ex6";

type dic = { name: string; price: number; stock?: boolean };
const obj1: dic = { name: "Laptop", price: 1000, stock: true };
const obj2: dic = { name: "Laptop", price: 1000 };
describe("DictFn6 Tests", () => {
  test("getUnsafe with key does exist", () => {
    const result = DictFn6(obj1);
    expect(result).toStrictEqual([1000, true]);
  });

  test("getUnsafe with key does not exist", () => {
    const result = DictFn6(obj2);
    expect(result).toStrictEqual(undefined);
  });
});
