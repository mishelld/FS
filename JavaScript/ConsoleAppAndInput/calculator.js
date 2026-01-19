let num1 = parseInt(process.argv[2]);
let opr = process.argv[3];
let num2 = parseInt(process.argv[4]);

if (!num1 || !num2) {
  console.log("Not a number");
} else {
  if (opr === "+") {
    let ans = num1 + num2;
    console.log(`${num1} ${opr} ${num2} = ${ans}`);
  } else if (opr === "*") {
    let ans = num1 * num2;

    console.log(`${num1} ${opr} ${num2} = ${ans}`);
  } else if (opr === "-") {
    let ans = num1 - num2;

    console.log(`${num1} ${opr} ${num2} = ${ans}`);
  } else if (opr === "/") {
    if (num2 === 0) {
      console.log("You can’t divide by zero.");
    } else {
      let ans = num1 / num2;

      console.log(`${num1} ${opr} ${num2} = ${ans}`);
    }
  }
}
