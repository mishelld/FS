/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num, ans = num) {
  //Your code here
  if (num === 1) return ans;
  return findFactorial(num - 1, ans * (num - 1));
};

//Exercise 2
const reverseString = function (str, ans) {
  //Your code here
  if (str === "") {
    return ans;
  }
  return reverseString(str.slice(1), str[0] + ans);
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  //Your code here
  if (arr1.length === 0) {
    return;
  }
  const elem = arr1.shift();
  arr2.push(elem);
  return swap(arr1, arr2);
};
swap(arr1, arr2);
console.log(arr1); //[]
console.log(arr2); //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };

//Extension
/*const swap = function (arr1, arr2) {
  //Your code here
  if (arr1.length === 0) {
    return;
  }
  const elem = arr1.pop();
  arr2.push(elem);
  return swap(arr1, arr2);
}; */
