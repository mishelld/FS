class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
  findNode(value) {
    if (!this.value) {
      return false;
    }
    if (value === this.value) {
      return true;
    }

    if (value > this.value && this.rightChild) {
      return this.rightChild.findNode(value);
    } else if (value < this.value && this.leftChild) {
      return this.leftChild.findNode(value);
    } else {
      return false;
    }
  }
  findCommonParent(val1, val2) {
    if (
      (val1 <= this.value && this.value <= val2) ||
      (val2 <= this.value && this.value <= val1)
    ) {
      return this.value;
    }
    if (val1 < this.value && val2 < this.value) {
      return this.leftChild.findCommonParent(val1, val2);
    } else if (val1 > this.value && val2 > this.value) {
      return this.rightChild.findCommonParent(val1, val2);
    }
  }
  removeNode(parent, value) {
    if (value > this.value && this.rightChild) {
      return this.rightChild.removeNode(this, value);
    } else if (value < this.value && this.leftChild) {
      return this.leftChild.removeNode(this, value);
    } else {
      if (this.helperfunc(parent, this)) {
        return true;
      }
    }
    this.value = this.findMinNode(this.rightChild);
    this.rightChild.removeNode(this, this.value);
    return true;
  }
  findMinNode(node) {
    let current = node;
    while (current.leftChild) {
      current = current.leftChild;
    }
    return current.value;
  }

  helperfunc(parent, child) {
    if (!child.leftChild && !child.rightChild) {
      if (parent.rightChild === child) {
        parent.rightChild = null;
      } else if (parent.leftChild === child) {
        parent.leftChild = null;
      }
      return true;
    } else if (child.leftChild && !child.rightChild) {
      if (parent.rightChild === child) {
        parent.rightChild = child.leftChild;
      } else if (parent.leftChild === child) {
        parent.rightChild = child.leftChild;
      }
    } else if (!child.leftChild && child.rightChild) {
      if (parent.rightChild === child) {
        parent.rightChild = child.rightChild;
      } else if (parent.leftChild === child) {
        parent.rightChild = child.rightChild;
      }
    }
  }
}

//insert nodes (same as in lesson)
/*
let letters = ["H", "E", "S", "G", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach((l) => bSTree.insertNode(l));
//Use the following to test
console.log(bSTree.findNode("H")); // should print true
console.log(bSTree.findNode("G")); // should print true
console.log(bSTree.findNode("Z")); // should print false
console.log(bSTree.findNode("F")); // should print false
console.log(bSTree.findNode("y")); // should print false - we didn't make the tree case sensitive!
*/
/*
let bSTree = new BSNode();

letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];
letters.forEach((l) => bSTree.insertNode(l));

console.log(bSTree.findCommonParent("B", "I")); //should return "H"
console.log(bSTree.findCommonParent("B", "G")); //should return "E"
console.log(bSTree.findCommonParent("B", "L")); //should return "J"
console.log(bSTree.findCommonParent("L", "Y")); //should return "R"
console.log(bSTree.findCommonParent("E", "H")); //should return "J"
*/
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
