// kiem tra da dang nhap user chua => chuyen chu cho button
const current_user = JSON.parse(localStorage.getItem("current_user"));
const accountBtn_1 = document.querySelector("#accountButton_1") || null;
const accountBtn_2 = document.querySelector("#accountButton_2") || null;
const btn_user_register_page = document.querySelector(".btn__user") || null;
const login_url = window.location.href.includes("html/")
  ? "./register.html"
  : "./html/register.html";
const account_url = window.location.href.includes("html/")
  ? "./account.html"
  : "./html/account.html";
const loginText = `<span><i class="fa-solid fa-user"></i></span> Login`;

if (!current_user) {
  // neu khong co => hien thi chu login de nguoi dung biet
  accountBtn_1 ? (accountBtn_1.innerHTML = loginText) : null;
  accountBtn_1?.addEventListener("click", () => {
    window.location.href = login_url;
  });
  accountBtn_2 ? (accountBtn_2.innerHTML = loginText) : null;
  accountBtn_2?.addEventListener("click", function () {
    window.location.href = login_url;
  });
  btn_user_register_page
    ? (btn_user_register_page.innerHTML = loginText)
    : null;
  btn_user_register_page?.addEventListener("click", function () {
    window.location.href = login_url;
  });
} else {
  // neu da dang nhap => hien thi username cua nguoi dung
  accountBtn_1 ? (accountBtn_1.innerHTML = current_user.username) : null;
  accountBtn_1?.addEventListener("click", function () {
    window.location.href = account_url;
  });

  accountBtn_2 ? (accountBtn_2.innerHTML = current_user.username) : null;
  accountBtn_2?.addEventListener("click", function () {
    window.location.href = account_url;
  });

  btn_user_register_page
    ? (btn_user_register_page.innerHTML = current_user.username)
    : null;
  btn_user_register_page?.addEventListener("click", function () {
    window.location.href = account_url;
  });
}

// neu nhu la account page => doi thanh nut logout
if (window.location.href.includes("account.html")) {
  accountBtn_1.innerHTML = "Logout";
  accountBtn_1.addEventListener("click", () => {
    // xoa current_user => chuyen lai trang login
    localStorage.removeItem("current_user");
    window.location.href = login_url;
  });
  accountBtn_2.innerHTML = "Logout";
  accountBtn_2.addEventListener("click", function () {
    // xoa current_user => chuyen lai trang login
    localStorage.removeItem("current_user");
    window.location.href = login_url;
  });
}
