//ex1
/*
const run = true;

if (run) {
  let distance = 8;
  for (var i = 0; i < distance; i++) {
    console.log("running");
  }
  console.log("Finished running " + distance + " miles");
}

console.log("Damn, you see this gal? She ran " + distance + " miles");
*/
/*
What will console log?
running
running
running
running
running
running
running
running
Finished running 8 miles
Will there be an error? yes
Why? becuase let is bock-scoped and distance exists only inside if block
Will something be undefined? no
Why? undefined happens when a variable exists but has no value, here distance doesnt exist at all in that scope
To what scope does each variable belong? distance - local, run - global, i - global
Global or local? If local, to which specifically? distance - inside if, run and i everywhere.
*/
//ex2
/*
if (13 == "space") {
  let cowSound = "moo";
} else {
  console.log("Cow says " + cowSound);
}
  */
/*
What will console log? -
Will there be an error? yes
Why?  becuase let is bock-scoped and cowSound exists only inside if block
Will something be undefined? no
Why? undefined happens when a variable exists but has no value, here cowSound doesnt exist at all in that scope
To what scope does each variable belong? cowSound - if block scope
Global or local? If local, to which specifically? cowSound- local
*/
//ex3
/*
const serveOrders = function (orders) {
  for (let order of orders) {
    let specialOrder = "special " + order;
    console.log("Served a " + specialOrder);
  }

  console.log("Finished serving all the orders: " + orders);
};
const allOrders = ["fish", "lettuce plate", "curious cheese"];
serveOrders(allOrders);
*/
/*
What will console log?
Served a special fish
Served a special lettuce plate
Served a special curious cheese
Finished serving all the orders: fish,lettuce plate,curious cheese
Will there be an error? no
Why? the code runs successfully
Will something be undefined? no
Why? all variables are defined within their vaild scopes
To what scope does each variable belong? 
serveOrders - global
function (orders) - function scope
allOrders - global
order - block scope
specialOrder - block scope
Global or local? If local, to which specifically?
serveOrders - global
function (orders) - local
allOrders - global
order - local
specialOrder - local
 */
//ex4
/*
const pot = "red pot with earth in it";

const getSeed = function () {
  const seed = "brown seed";
};

const plant = function () {
  getSeed();
  console.log("Planting the " + seed + " inside a " + pot);
};

plant();
*/
/*
What will console log? -
Will there be an error? yes
Why?  becuase const seed is bock-scoped and  seed exists only getSeed function.
Will something be undefined? no
Why?   undefined happens when a variable exists but has no value, here seed doesnt exist at all in that scope
To what scope does each variable belong? 
seed - function scope
pot - global
getSeed - global
plant - global
Global or local? If local, to which specifically?
seed - local
pot - global
getSeed - global
plant - global
*/
//5
/*
const doesUserExist = function (name) {
  const users = [
    { name: "Shapira", age: 19 },
    { name: "Lucius", age: 23 },
  ];
  for (let u of users) {
    if (u.name == name) {
      const found = true;
    }
  }
  return found;
};

const userExists = doesUserExist("Lucius");
if (userExists) {
  console.log("We found the ragamuffin!");
} else {
  console.log("No idea where this person is.");
}
*/
/*
What will console log? -
Will there be an error? yes
Why? becuase const found is bock-scoped and seed exists only inside if scope.
Will something be undefined? no
Why?  undefined happens when a variable exists but has no value, here found doesnt exist at all in that scope
To what scope does each variable belong?
doesUserExist - global 
(name) - function scope
users - function scope
u - block scope
found - block scope
userExists - global
Global or local? If local, to which specifically?
doesUserExist - global 
(name) - local
users - local
u - local
found - local
userExists - global
*/
//ex6
const isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}
/*
What will console log? -
Will there be an error? yes
Why? because const means variable cannot be reassigned, later in the loop we try to change to isEnough to true
Will something be undefined? no
Why?  undefined happens when a variable exists but has no value
To what scope does each variable belong?
isEnough - global
makeEnough - global
i = block scope
Global or local? If local, to which specifically?
isEnough - global
makeEnough - global
i = local, inside for loop
*/
