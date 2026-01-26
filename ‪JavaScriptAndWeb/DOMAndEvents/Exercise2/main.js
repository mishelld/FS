const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};
const container = document.getElementById("container");
const input = document.getElementById("name");
const button = document.getElementById("button");
const checkReservation = function () {
  const res_name = input.value;
  const message = document.createElement("p");

  if (reservations[res_name]) {
    if (reservations[res_name].claimed) {
      message.innerHTML = "Hmm, someone already claimed this reservation";
    } else {
      message.innerHTML = "welcome, " + res_name;
    }
  } else {
    message.innerHTML = "You have no reservation";
  }
  container.appendChild(message);
};

button.onclick = checkReservation;
