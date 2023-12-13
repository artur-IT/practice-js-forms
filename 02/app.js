const btn = document.querySelector("input[type='submit']");
const fields = document.querySelectorAll("div label + input");

const user = {
  email: "",
  password: "",
  agree: false,
};

// CHECK DATA FROM INPUT
checkData = (login, pass1, pass2, agree) => {
  const errors = [];

  // check email
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(login)) {
    fields[0].previousElementSibling.style.color = "#000";
    user.email = login;
  } else {
    errors.push(fields[0].previousElementSibling);
    fields[0].value = "";
  }

  // check passwords
  if (pass1 == pass2 && /[0-9]{6,}/.test(pass1)) {
    fields[1].previousElementSibling.style.color = "#000";
    fields[2].previousElementSibling.style.color = "#000";
    user.password = pass1;
  } else {
    errors.push(fields[1].previousElementSibling, fields[2].previousElementSibling);
    fields[2].value = "";
  }

  // check agree
  if (agree == true) {
    fields[3].previousElementSibling.style.color = "#000";
    user.agree = agree;
  } else {
    errors.push(fields[3].previousElementSibling);
  }

  errors.forEach((err) => (err.style.color = "red"));
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let login,
    pass1,
    pass2,
    agree = "";
  fields.forEach((item) => {
    switch (item.name) {
      case "login":
        login = item.value;
      case "pass1":
        pass1 = item.value;
      case "pass2":
        pass2 = item.value;
      case "accept":
        agree = item.checked;
    }
  });
  checkData(login, pass1, pass2, agree);
});
