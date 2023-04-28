let myformEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let resMsgEl = document.getElementById("resultMsg");
let submitBtnEl = document.getElementById("submit-button");

nameEl.addEventListener("blur", function () {
  if (nameEl.value === "") {
    nameErrMsgEl.textContent = "Required";
  } else {
    nameErrMsgEl.textContent = "";
  }
});
passwordEl.addEventListener("blur", function () {
  if (passwordEl.value === "") {
    passwordErrMsgEl.textContent = "Required";
  } else {
    passwordErrMsgEl.textContent = "";
  }
});

myformEl.addEventListener("submit", function () {
  event.preventDefault();
  if ((nameEl.value !== "") & (passwordEl.value !== "")) {
    resMsgEl.textContent = "Login Success";
  } else if (nameEl.value === "") {
    resMsgEl.textContent = "Fill in the required details";
    nameErrMsgEl.textContent = "Required";
    passwordErrMsgEl.textContent = "Required";
  } else if (nameEl.value === "") {
    resMsgEl.textContent = "Fill in the required details";
    nameErrMsgEl.textContent = "Required";
  } else if (passwordEl.value === "") {
    resMsgEl.textContent = "Fill in the required details";
    passwordErrMsgEl.textContent = "Required";
  }
});
