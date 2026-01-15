class UniqueArray {
  constructor() {
    this.uniqueStuff = [];
    this.uniqueLength = 0;
    this.lookup = {};
  }

  add(item) {
    if (typeof item === "object") {
      console.log("you can only add primitive types");
    } else {
      if (!this.exists(item)) {
        this.uniqueStuff[this.uniqueLength] = item;
        this.uniqueLength++;
        this.lookup[item] = true;
      } else {
        console.log("already exists");
      }
    }
  }
  showAll() {
    console.log(this.uniqueStuff);
  }
  exists(item) {
    return Boolean(this.lookup[item]);
  }
  get(index) {
    if (index >= 0 && index < this.uniqueLength) {
      return this.uniqueStuff[index];
    } else {
      return -1;
    }
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
