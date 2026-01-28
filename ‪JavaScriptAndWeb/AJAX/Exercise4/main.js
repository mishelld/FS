const api_key = "GvQpo8X25YBMeAkT6uVlsHiBAyGXQYcu";

const fetch = function () {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?q=cats&api_key=${api_key}&limit=1`,
    )
    .then((response) => {
      const url = response.data.data[0].embed_url;
      const iframe = document.querySelector("iframe");
      iframe.src = url;
    });
};

const button = document.getElementById("button");

button.addEventListener("click", () => {
  fetch();
});
