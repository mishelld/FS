const button = document.getElementById("checkPrice");
const input = document.getElementById("itemName");
const result = document.getElementById("result");

const buybutton = document.getElementById("buyitem");
const buyinput = document.getElementById("buyitemName");
const buyresult = document.getElementById("buyresult");

button.addEventListener("click", () => {
  const name = input.value.trim();
  console.log(name);

  if (!name) {
    result.textContent = "please enter item name";
    return;
  }
  axios
    .get(`/priceCheck/${name}`)
    .then((res) => {
      if (res.data.price !== null) {
        result.textContent = `price: $${res.data.price}`;
      } else {
        result.textContent = "item not found.";
      }
    })
    .catch(() => {
      result.textContent = "error finding item";
    });
});

buybutton.addEventListener("click", () => {
  const name = buyinput.value.trim();
  console.log(name);

  if (!name) {
    buyresult.textContent = "please enter item name";
    return;
  }
  axios
    .get(`/buy/${name}`)
    .then((res) => {
      console.log(res.data);
      buyresult.textContent = `Thank you so much for your purchase! enjoy ${res.data.name}`;
    })
    .catch(() => {
      buyresult.textContent = "error finding item";
    });
});
