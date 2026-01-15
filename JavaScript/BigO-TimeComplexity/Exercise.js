//EX1 What is the complexity of the following code?  O(n)
/*
const getBalance = function (bankOperations) {
  //O(1)
  let balance = 0;
  //O(n) * O(1)
  for (let op of bankOperations) {
    balance += op; //O(1)
  }
  return balance;
};

getBalance([-27, -43, -2400, -700, 15000, 58]);
//EX2 What is the time complexity of the following code?
const printSome = function (complaints) {
  //O(log(n))
  for (
    let i = 1;
    i < complaints.length;
    i = i * 2 // 2 4 8 16...
  )
    console.log(complaints[i].text); //O(1)
};
//What is the complexity of the getHyp function?  O(1)

const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 },
];

const relevantSides = allSides.filter((s) => s.a % 3 == 0);
for (let sides of relevantSides) {
  console.log(getHype(sides));
}

const getHype = function (sides) {
  let a = sides.a; //O(1)
  let b = sides.b; //O(1)
  let sumOfSquares = a * a + b * b; //O(1)
  return Math.sqrt(sumOfSquares); //O(1)
};

//EX4 What is the complexity of the getDistributions function? O(n*m)

const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c",
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c",
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a",
  },
};
const studentGithubs = ["brBlds", "dvOna", "nmPrz"];

const distributions = {
  1: {},
  2: {},
  3: {},
};

const getDistributions = function (studentAnswers) {
  //O(n) -number of students
  studentGithubs.forEach((sg) => {
    let answers = studentAnswers[sg];
    //o(m) - number of questions per student
    Object.keys(answers).forEach((questionNumber) => {
      //O(1)
      let letterAnswer = answers[questionNumber];

      distributions[questionNumber][letterAnswer]
        ? distributions[questionNumber][letterAnswer]++
        : (distributions[questionNumber][letterAnswer] = 1);
    });
  });

  return distributions;
};

getDistributions(studentAnswers);
//EX5 What is the complexity of the emailManager function? //O(n)

const sendEmails = (email, recepients) =>
  //O(n)
  recepients.forEach((r) => r.sendEmail(email));

const emailManager = function () {
  let email = generateEmail(); //O(1)

  $.get("/recepients", function (recepients) {
    sendEmails(email, recepients);
  });
};
//EX6
*/
//O( n^2 )
/*
const findDuplicates = function (ages) {
  for (let i = 0; i < ages.length; i++) {
    for (let j = i + 1; j < ages.length; j++) {
      if (ages[i] === ages[j]) {
        console.log(`${ages[i]} has a duplicate`);
      }
    }
    //note that this *entire* inner loop runs for each iteration of i
  }
};
*/
/*
let ages_obj = {};
const findDuplicates = function (ages) {
  for (let i = 0; i < ages.length; i++) {
    if (ages_obj[ages[i]]) {
      console.log(`${ages[i]} has a duplicate`);
    } else {
      ages_obj[ages[i]] = true;
    }
  }
};
*/
//EX7
/*
let employees = { ax01: { name: Ray, age: 28, salary: 1300 } };

const findEmployeeSalary = function (employeeID) {
  const employee = employees[employeeID];
  if (employee) {
    return employee.salary;
  }
  return false;
};
*/

//EX8
let numbers = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427,
  442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852,
  896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272,
  1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667,
  1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198,
  2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554,
  2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932,
  2962, 2984, 2987,
];

const findIndex = function (numbers, num) {
  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (numbers[mid] > num) {
      end = mid - 1;
    } else if (numbers[mid] < num) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(findIndex(numbers, 2630));
//Ex 9
//green - O(1)
//yellow - O(logn)
//blue - O(n)
//red - O(n^2)
