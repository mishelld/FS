function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function oddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!isEven(arr[i])) {
      console.log(arr[i]);
    }
  }
}

let numbers = [1, 2, 3, 4, 5];
oddNumbers(numbers);
