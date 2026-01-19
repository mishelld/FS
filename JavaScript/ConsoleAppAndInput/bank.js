let balance = 0;

const getBalance = function () {
  return balance;
};

const deposit = function (amount) {
  if (amount <= 0 || isNaN(amount)) {
    return { flag: false, message: "Invalid amount" };
  }
  balance += amount;
  return { flag: true, amount: balance };
};

const withdraw = function (amount) {
  if (amount > balance || amount < 0) {
    return { flag: false, message: "Invalid amount" };
  }
  balance -= amount;
  return { flag: true, amount: balance };
};

export { getBalance, deposit, withdraw };
