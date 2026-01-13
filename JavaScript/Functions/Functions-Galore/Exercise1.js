const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};
const capitalizeWords = function (str) {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += capitalize(words[i]) + " ";
  }
  return result;
};
const getAge = function (age) {
  if (age < 21) {
    return "an Underage";
  } else if (age > 55) {
    return "a 55+";
  } else return age + "";
};
const countryAndcity = function (country, city) {
  return capitalize(city) + ", " + capitalize(country);
};

const catchphrase = function (phrase) {
  new_phrase = phrase[0].toUpperCase() + phrase.slice(1);
  return `"${new_phrase}"`;
};
const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeWords(person.profession);
  summary += `from ${countryAndcity(person.country, person.city)}.`;
  summary += ` ${person.name} loves to say ${catchphrase(person.catchphrase)}`;
  return summary;
};

for (let people of people_info) {
  console.log(getSummary(people));
}
