const associations = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

associations.splice(3, 1)
console.log(associations) // prints ["life"]

//EX1
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

let temp = genes[2]; //RLF
genes[2] = genes[genes.length - 1]
genes[genes.length - 1] = temp;

console.log(genes)

let AZ = genes[3]
genes.splice(3, 1)
console.log(genes)
genes.push(AZ, AZ)
console.log(genes)
genes.splice(0, 0, "FXT")
console.log(genes)




