const posts = [
  { name: "Bob", text: "bla bla" },
  { name: "Alice", text: "bla" },
];
export function getList() {
  const posts_copy = [...posts];
  return posts_copy;
}

export function addPost(pname, ptext) {
  const new_post = { name: pname, text: ptext };
  posts.push(new_post);
}

export function deletePost(pname) {
  const index = posts.findIndex((p) => p.name === pname);
  if (index != -1) {
    posts.splice(index, 1);
  }
}
