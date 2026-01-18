let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

employeesArr.forEach((e) => {
  if (
    (e.id ?? "missing_data") === "missing_data" ||
    (e.age ?? "missing_data") === "missing_data"
  ) {
    console.log(`${e.name} is missing`);
  }
});
