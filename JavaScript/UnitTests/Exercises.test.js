const Exercises = require("./Exercises");
const exercises = new Exercises();

describe("Exercises - isEven", () => {
  test("returns true for even numbers", () => {
    expect(exercises.isEven(4)).toBeTruthy();
  });
  test("returns false for odd numbers", () => {
    expect(exercises.isEven(7)).toBeFalsy();
  });
});

describe("Exercises - removeAtLeastOne", () => {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;
  test("returns true", () => {
    let new_len = exercises.removeAtLeastOne(arr).length;
    expect(new_len).toBeLessThan(len);
  });
  new_len = exercises.removeAtLeastOne(arr).length;
  test("returns true", () => {
    expect(new_len).toBeLessThan(len);
  });
});

describe("Exercises - simplify", () => {
  const symbols = ["!", "#", ".", ",", "'"];
  const str1 = "Hello World,";
  const str2 = "Hello World!";

  test("returns true", () => {
    exercises.simplify(str1);
    let flag1 = symbols.some((s) => str1.includes(s));
    expect(flag1).toBe(true);
  });
  test("returns false", () => {
    exercises.simplify(str2);
    let flag2 = symbols.some((s) => str2.includes(s));
    expect(flag2).toBe(true);
  });
});
