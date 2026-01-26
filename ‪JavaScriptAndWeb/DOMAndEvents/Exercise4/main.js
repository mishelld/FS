const container = document.getElementById("container");
const name_input = document.getElementById("name-input");
const salary_input = document.getElementById("salary-input");
const birthday_input = document.getElementById("birthday-input");
const phone_input = document.getElementById("phone-input");
const validate = function () {
  console.log(name_input.value.length);
  const error = document.createElement("p");
  if (name_input.value.length <= 2) {
    error.innerHTML = "Name must be longer than 2 characters";
  }
  if (salary_input.value <= 10000 || salary_input.value >= 16000) {
    error.innerHTML = "Salary must be greater than 10,000 but less than 16,000";
  }
  if (!birthday_input.value) {
    error.innerHTML = "Birthday may not be null";
  }
  if (phone_input.value.length !== 10) {
    console.log(phone_input);
    error.innerHTML = "Phone must be 10 digits long";
  }
  container.appendChild(error);
};
