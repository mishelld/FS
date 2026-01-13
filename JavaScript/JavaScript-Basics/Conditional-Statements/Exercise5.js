let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here
let discount = 0;
if (customerType === "premium") {
  discount += 20;
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    discount += 15;
  } else {
    discount += 10;
  }
} else {
  if (purchaseAmount > 100) {
    discount += 10;
  } else if (purchaseAmount > 50) {
    discount += 5;
  }
}

console.log("you have a discount of", discount);
