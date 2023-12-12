const btn = document.querySelector("div > input");
const fields = document.querySelectorAll("label input");
const ul = document.querySelector("ul");
const li = document.createElement("li");

const user = {
  firstName: "",
  lastName: "",
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fields.forEach((item) => {
    switch (item.name) {
      case "firstName":
        user.firstName = item.value;
      case "lastName":
        user.lastName = item.value;
    }
  });
  li.classList.add("user-list__person");
  li.textContent = `${user.firstName} ${user.lastName}`;
  ul.appendChild(li);
});
