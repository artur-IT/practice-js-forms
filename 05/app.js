const button = document.querySelector("input[type=submit]");
const ul = document.querySelector("ul.messages");

errors = (field) => {
  const li = document.createElement("li");
  li.textContent = `popraw błędy w polu ${field}`;
  li.style.color = "red";
  ul.appendChild(li);
};

button.addEventListener("click", (e) => {
  const inputRequired = document.querySelectorAll("[required]");
  document.querySelectorAll("ul li").forEach((li) => li.remove());
  let i = 0;
  inputRequired.forEach((field, idx) => {
    if (field.value == "") {
      errors(field.parentElement.textContent);
    } else i++;

    if (i == 7) {
      const li = document.createElement("li");
      e.preventDefault();
      li.textContent = `Dane zostały wysłane`;
      li.style.color = "green";
      ul.appendChild(li);
      i = 0;
    }
  });
});
