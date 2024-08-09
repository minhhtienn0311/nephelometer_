// render thong tin nguoi dung ra man hinh
const account_name = document.getElementById("account_name");
const account_email = document.getElementById("account_email");
const currentUser = JSON.parse(localStorage.getItem("current_user"));
// Thay doi thong tin dua vao current user trong local storage
account_name.innerText = current_user.username;
account_email.innerText = current_user.email;
