function randomJoke() {
  const p = document.getElementById("p");
  p.innerText = "loading...";
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      p.innerText = data.setup + " " + data.punchline;
    });
}
