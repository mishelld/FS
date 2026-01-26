const list = document.getElementById("list");
const input = document.getElementById("item");
const button = document.getElementById("button");

const addItem = function () {
  const item = input.value;
  const li = document.createElement("li");
  li.innerHTML = item;
  list.appendChild(li);
};
