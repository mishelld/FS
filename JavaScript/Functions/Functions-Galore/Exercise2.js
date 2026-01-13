const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function (sentence) {
  for (let i = 0; i < specialChars.length; i++) {
    sentence = sentence.split(specialChars[i]).join(" ");
  }
  return sentence.split(" ");
};

const ignoreCase = function (word) {
  let result = "";

  for (let i = 0; i < word.length; i++) {
    result += word[i].toLowerCase();
  }
  return result;
};
const addToCounter = function (word) {
  if (word === "") return;
  word = ignoreCase(word);
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
};

const countWords = function (sentence) {
  const words = cleanText(sentence);
  for (let i = 0; i < words.length; i++) {
    addToCounter(words[i]);
  }
};
console.log(countWords(story));
console.log(wordCounts);
