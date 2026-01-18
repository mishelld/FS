let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];
meatArr = [...meatArr, "rabbit"];
vegetableArr = ["carrots", "potatoes", "lettuce"];

console.log(meatArr);
console.log(vegetableArr);

var firstPiece = { id: 101, name: "Ofri" };

var seoncdPiece = { country: "Israel" };
var new_piece = { ...firstPiece, ...seoncdPiece };
console.log(new_piece);
