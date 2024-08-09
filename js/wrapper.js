const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btn__user");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  // check xem login hay logout
  if (!JSON.parse(localStorage.getItem("current_user"))) {
    wrapper.classList.add("active-popup");
  }
  //else {
  //   // xoa du lieu current_user
  //   localStorage.removeItem("current_user");
  //   username_nav.innerHTML = "Login";
  //   alert("Logout successful");
  // }
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
