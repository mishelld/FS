class Exercises {
  isEven(n) {
    return n % 2 == 0 ? true : false;
  }
  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
    arr.splice(0, numItemsToRemove);
    return arr;
  }
  //should return a clean string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"];
    return str
      .split("")
      .filter((c) => symbols.indexOf(c) == -1)
      .join("");
  }
  validate(arr) {
    const booleans = arr.filter((a) => typeof a === "boolean");
    if (booleans.length < 1) {
      return { error: "Need at least one boolean" };
    }

    const true_count = booleans.filter((a) => a === true).length;
    const false_count = booleans.filter((a) => a === false).length;

    return true_count > false_count;
  }
}

module.exports = Exercises;
