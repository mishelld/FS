const Exercises = require("./Exercises");
const exercises = new Exercises();

describe("Exercises - isEven", () => {
  test("returns true for even numbers", () => {
    expect(exercises.isEven(4)).toBeTruthy();
  });

  test("returns false for odd numbers", () => {
    expect(exercises.isEven(7)).toBeFalsy();
  });
  test("returns false if no parameter is provided", () => {
    expect(exercises.isEven()).toBeFalsy();
  });
  test("returns false if parameter is not a number", () => {
    expect(exercises.isEven("string")).toBeFalsy();
  });
});

describe("Exercises - removeAtLeastOne", () => {
  let arr = [1, 2, 3, 4, 5];
  let len = arr.length;

  test("returns array with fewer elements than original", () => {
    let new_len = exercises.removeAtLeastOne(arr).length;
    expect(new_len).toBeLessThan(len);
  });

  test("returns array with fewer elements than original (second call)", () => {
    let new_len = exercises.removeAtLeastOne(arr).length;
    expect(new_len).toBeLessThan(len);
  });

  test("returns empty array if input is empty", () => {
    expect(exercises.removeAtLeastOne([])).toEqual([]);
  });
});

describe("Exercises - simplify", () => {
  const symbols = ["!", "#", ".", ",", "'"];
  const str1 = "Hello World,";
  const str2 = "Hello World!";

  test("string contains symbols before simplification (str1)", () => {
    let flag1 = symbols.some((s) => exercises.simplify(str1).includes(s));
    expect(flag1).toBe(false);
  });

  test("string contains symbols before simplification (str2)", () => {
    let flag2 = symbols.some((s) => exercises.simplify(str2).includes(s));
    expect(flag2).toBe(false);
  });

  test("returns empty string if input is empty", () => {
    expect(exercises.simplify("")).toBe("");
  });
});

describe("Exercises - validate", () => {
  test("returns true if more trues than falses", () => {
    expect(exercises.validate([false, true, true])).toBe(true);
  });

  test("returns error if no booleans in array", () => {
    expect(exercises.validate([1, 1, 1])).toEqual({
      error: "Need at least one boolean",
    });
  });

  test("returns false if more falses than trues", () => {
    expect(exercises.validate([false, false, true])).toBe(false);
  });
});
