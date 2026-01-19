import promptSync from "prompt-sync";
import { getBalance, deposit, withdraw } from "./bank.js";

const prompt = promptSync();
let balance = 0;
while (true) {
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
  let userOption = parseInt(prompt("Choose option (1-4):"));
  if (userOption < 1 || userOption > 4 || isNaN(userOption)) {
    console.log("Please enter valid option");
  } else if (userOption === 1) {
    console.log(`Your balance is: ${getBalance()}`);
  } else if (userOption === 2) {
    let userDeposit = parseInt(prompt("Enter amount to Deposit :"));
    let ans = deposit(userDeposit);
    if (ans.flag) {
      console.log(`New balance: ${ans.amount}`);
    } else {
      console.log(`New balance: ${ans.message}`);
    }
  } else if (userOption === 3) {
    let userWithdraw = parseInt(prompt("Enter amount to Withdraw:"));
    let ans = withdraw(userWithdraw);
    if (ans.flag) {
      console.log(`New balance: ${ans.amount}`);
    } else {
      console.log(`New balance: ${ans.message}`);
    }
  } else if (userOption === 4) {
    console.log("Goodbye");
    break;
  }
}
