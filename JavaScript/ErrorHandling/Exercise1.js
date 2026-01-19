const safeJsonParse = function (json) {
  try {
    const obj = JSON.parse(json);
    return obj;
  } catch (error) {
    return "Invalid JSON format";
  }
};

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"
