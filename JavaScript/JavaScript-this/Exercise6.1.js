//Extension 1
/*
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },
  money: 100,

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (this.drinkRequirements[drinkType] !== undefined) {
      let count_beans = this.beans - this.drinkRequirements[drinkType];
      if (count_beans < 0) {
        console.log("Sorry, we're all out of beans!");
      } else {
        this.beans -= this.drinkRequirements[drinkType];
        console.log("make", drinkType);
      }
    } else {
      console.log("Sorry, we don't make ", drinkType);
    }
  },
  buyBeans: function (numBeans) {
    if (this.money - numBeans * 5 < 0) {
      console.log("You do not have enough money.");
    } else {
      console.log(`You had ${this.beans} beans.`);
      this.money -= numBeans * 5;
      this.beans += numBeans;
      console.log(`Now you have ${this.beans} beans.`);
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

coffeeShop.buyBeans(4);
coffeeShop.buyBeans(100);

*/
//Extension 2
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 10 },
    frenchPress: { beanRequirement: 12, price: 7 },
  },
  money: 100,

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (this.drinkRequirements[drinkType] !== undefined) {
      let count_beans =
        this.beans - this.drinkRequirements[drinkType].beanRequirement;
      if (count_beans < 0) {
        console.log("Sorry, we're all out of beans!");
      } else {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        console.log("make", drinkType);
      }
    } else {
      console.log("Sorry, we don't make ", drinkType);
    }
  },
  buyBeans: function (numBeans) {
    if (this.money - numBeans * 5 < 0) {
      console.log("You do not have enough money.");
    } else {
      console.log(`You had ${this.beans} beans.`);
      this.money -= numBeans * 5;
      this.beans += numBeans;
      console.log(`Now you have ${this.beans} beans.`);
    }
  },
  buyDrink: function (drinkType) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
    console.log(`Now you have ${this.beans} beans and ${this.money} money.`);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"

coffeeShop.buyBeans(4);
coffeeShop.buyBeans(100);
coffeeShop.buyDrink("latte");
