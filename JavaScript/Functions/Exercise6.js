function Armstrongnumbers() {
  for (let i = 100; i <= 999; i++) {
    let numstr = i + "";
    let sum = 0;
    for (let j = 0; j < numstr.length; j++) {
      let digit = Number(numstr[j]);
      sum += digit ** 3;
    }
    if (sum === i) {
      console.log(i);
    }
  }
}
Armstrongnumbers();
