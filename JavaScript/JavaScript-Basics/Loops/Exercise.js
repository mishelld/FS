//Exercise 1
/*
const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let Index in names) {
  people.push({ name: names[Index], age: ages[Index] });
}

console.log(people);
*/
//Exercise 2
/*
for (let person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
  */
//Exercise 3
/*
const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];
for (let post_index in posts) {
  if (posts[post_index].id === 2) {
    posts.splice(post_index, 1);
  }
}
console.log(posts);
*/
//Exercise 4
/*
const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (let post of posts) {
  if (post.id === 2) {
    for (let comment_index in post.comments)
      if (post.comments[comment_index].id === 3) {
        post.comments.splice(comment_index, 1);
      }
    console.log(post.comments);
  }
}
*/
//Exercise 5
const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

let keys = Object.keys(dictionary);

for (let key of keys) {
  console.log("Words that begin with", key);
  for (let word of dictionary[key]) {
    console.log(word);
  }
}
