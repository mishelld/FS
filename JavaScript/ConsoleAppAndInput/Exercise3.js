import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name? ", (name) => {
  rl.question("What is your Email? ", (email) => {
    rl.question("How old are you? ", (age) => {
      rl.question("What is your Favorite Color? ", (color) => {
        console.log("Registration Summary:");
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Age: ", age);
        console.log("Favorite Color: ", color);
        rl.close();
      });
    });
  });
});
/*
console.log(`Hello ${name}`);
  rl.close();
*/
