const fetch = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      const items = data.items;
      items.forEach((item) => {
        console.log(item.volumeInfo.authors);
        console.log(item.volumeInfo.title);
        console.log(item.volumeInfo.industryIdentifiers[0].type);
      });
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

const button = document.getElementById("button");

button.addEventListener("click", () => {
  fetch("title", "How to Win Friends and Influence People");
});
