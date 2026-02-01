const input = document.querySelector("input");
const addbtn = document.querySelector("#btn");
const clearbtn = document.querySelector("#clear");

const list = document.querySelector("ul");
const savedData = localStorage.getItem("wisdom");
let wisdom = [];

if (savedData) {
  wisdom = JSON.parse(savedData);
  render();
}
function render() {
  list.innerHTML = "";
  wisdom.forEach((t) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.addEventListener("click", () => {
      deleteitem(t.id);
      render();
    });
    const div = document.createElement("div");
    div.append(span, li);
    span.innerText = "x";
    span.id = t.id;
    li.innerText = t.text;
    list.append(div);
  });
}
function deleteitem(id) {
  wisdom.filter((w) => id !== w.id);
}
addbtn.addEventListener("click", () => {
  const value = input.value;
  const text = value;
  wisdom.push({ id: Date.now(), text });
  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
  input.value = "";
});

clearbtn.addEventListener("click", () => {
  localStorage.clear();
  list.innerHTML = "";
});
