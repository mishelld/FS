//Exercise 1
/*
let p1 = {
    name: "bob",
    age: 30,
    city: "Arad"
}
let p2 = {
    name: "alice",
    age: 30,
    city: "Arad"
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log(`${p1.name} wanted to date ${p2.name}`)
    }
    else {
        console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`)
    }
}
    */

//Exercise 2
/*
let myList = [p1, p2]

//modify one of the values in the first object
p1.city = "Tel Aviv"

console.log(myList)
//remove the second object from the array entirely.
myList.splice(myList.length - 1, 1)

console.log(myList)
*/
//Exercise 3
/*
let arr = [p1, p2]
myList.push(...arr)
console.log("ex3")
console.log(myList)
*/

//Exercise 4
/*
let library = { books: [{ title: "Harry Potter", author: "JK Rowling" }, { title: "Game of Thrones", author: "George R. R. Martin" }] }

myList.push(library)
console.log("ex4")
console.log(myList)
*/

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
//Exercise 5.1

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
//Exercise 5.2
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}

const namet = "Ted"
let lower_name = namet.toLowerCase()


if (reservations[lower_name]) {
    if (!reservations[lower_name].claimed) {
        //bob
        console.log("welcome,", lower_name)
    }
    else {
        //Ted
        console.log("Hmm, someone already claimed this reservation")

    }
}
else {
    reservations[lower_name] = { claimed: true }

}





