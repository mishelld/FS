import promptSync from "prompt-sync";
const prompt = promptSync();
const quiz = [
  { question: "What is 2 + 2? ", answer: "4" },
  { question: "What is the capital of France? ", answer: "paris" },
  { question: "What year is it? ", answer: "2026" },
];
let score = 0;
for (let item of quiz) {
  let userAns = prompt(item.question);
  if (userAns === item.answer) {
    score++;
  }
}

console.log(`Final Score: ${score}/3 correct!`);
