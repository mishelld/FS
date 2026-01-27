import { getList, addPost, deletePost } from "./model.js";

function render(posts) {
  const posts_container = document.getElementById("posts");
  posts_container.innerHTML = "";
  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `${post.name}: ${post.text}`;
    div.classList.add("click");
    div.addEventListener("click", () => {
      deletePost(post.name);
      console.log(getList());
      render(getList());
    });
    posts_container.appendChild(div);
  }
}
const button = document.getElementById("button");
button.addEventListener("click", () => {
  const name = document.getElementById("name");
  const text = document.getElementById("text");
  addPost(name.value, text.value);
  const list = getList();
  render(list);
});
