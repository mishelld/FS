//ex1
/*
let p1 = {
  name: "bob",
  age: 30,
  city: "Arad",
};
let p2 = {
  name: "alice",
  age: 30,
  city: "Arad",
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`);
  } else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`);
  }
}
*/
//ex2
/*
let library = {
  books: [
    { title: "Harry Potter", author: "JK Rowling" },
    { title: "Game of Thrones", author: "George R. R. Martin" },
    { title: "Dune", author: "Frank Herbert" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "Percy Jackson & the Olympians", author: "Rick Riordan" },
  ],
};
*/
//ex3
//Exercise 5
/*
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = "moshe" // Initialize different names to test the code
if (reservations[name]) {
    if (!reservations[name].claimed) {
        //bob
        console.log("welcome,", name)
    }
    else {
        //Ted
        console.log("Hmm, someone already claimed this reservation")

    }
}
else {
    console.log("You have no reservation")

}
//Exercise 2.1

if (reservations[name]) {
    if (!reservations[name].claimed) {
        //bob
        console.log("welcome,", name)
    }
    else {
        //Ted
        console.log("Hmm, someone already claimed this reservation")

    }
}
else {
    reservations[name] = { claimed: true }

}
console.log(reservations)
*/
//Exercise 3.2
/*
const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
};

const namet = "Ted";
let lower_name = namet.toLowerCase();

if (reservations[lower_name]) {
  if (!reservations[lower_name].claimed) {
    //bob
    console.log("welcome,", lower_name);
  } else {
    //Ted
    console.log("Hmm, someone already claimed this reservation");
  }
} else {
  reservations[lower_name] = { claimed: true };
}
  */
//ex4
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: true, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const radish = kitchen.fridge.items[1];
const daysExpired = date - radish.expiryDate;
const fixPrice = kitchen.fridge.price / 2;
let message = `${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago.`;

if (works) {
  message += `Weird, considering her fridge works. `;
} else {
  message += `Probably because her fridge doesn't work. `;
}

if (hasOven) {
  message += `Luckily, she has an oven to cook the ${radish.name} in.`;
} else {
  message += `Too bad she doesn't have an oven to cook the ${radish.name} in.`;
}

if (!works) {
  message += ` And she'll have to pay ${fixPrice} to fix the fridge.`;
}

console.log(message);
