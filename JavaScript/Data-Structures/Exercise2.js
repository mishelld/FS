class UniqueArray {
  constructor() {
    this.uniqueStuff = [];
    this.uniqueLength = 0;
    this.lookup = {};
  }

  add(item) {
    if (!this.exists(item)) {
      this.uniqueStuff[this.uniqueLength] = item;
      this.uniqueLength++;
      this.lookup[item] = true;
    } else {
      console.log("already exists");
    }
  }
  showAll() {
    console.log(this.uniqueStuff);
  }

  exists(item) {
    for (let i = 0; i < this.uniqueLength; i++) {
      if (this.uniqueStuff[i] === item) {
        return true;
      }
    }
    return false;
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
const obj1 = { x: 3 };
const obj2 = { x: 3 };
uniqueStuff.add(obj1);
uniqueStuff.add(obj2);
uniqueStuff.add(obj1);
uniqueStuff.showAll();
console.log(uniqueStuff.exists(obj1));
console.log(uniqueStuff.exists(obj2));
console.log(uniqueStuff.exists({ x: 3 }));
