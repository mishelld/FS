//Exercise 1
let numChildren = 0;
let isCareful = false;

if (!isCareful) {
    numChildren += 1;
    console.log(numChildren);
}
//Exercise 2
let silverwareCount = 9;
if (silverwareCount % 2 != 0) {
    console.log("here is something missing");
}
//Exercise 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance === "stellar") {
    salary += stellarBonus;
    console.log("your salary", salary);

}
else {
    salary += goodBonus;
    console.log("your salary", salary);

}
//Exercise 4

const isVIP = false
let cash = 500

if (isVIP || cash > 300) {
    console.log("hello");

}
else {
    console.log("you cant enter");

}
//Exercise 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++

if (d) {
    b = a
}

d = a + (b * c) // 
d++
b += 2
console.log(a, b, c, d);
//Exercise 6
const gender = null
let profession = "business"

if (gender === "woman") {
    profession += "woman"

}
else {
    profession += "man"

}
//Exercise 7
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
//If the customer has previously bought a Tesla, and the customer is a US citizen, the AI should check how long ago the customer bought their Tesla
if (boughtTesla && isUSCitizen) {
    console.log("customer bought their Tesla", 2025 - yearOfTeslaPurchase, "years ago")
}
//If the Tesla was bought four or more years ago, the AI should ask (console log) whether the customer would like an upgrade

if (2025 - boughtTesla >= 4) {
    console.log("would like an upgrade?")
}
else {
    console.log(" are you satisfied with the car?")
}
if (!isUSCitizen) {
    if (boughtTesla) {
        console.log("would like to move to the US?")

    }
    else {
        console.log("are you interested in buying one?")
    }
}
