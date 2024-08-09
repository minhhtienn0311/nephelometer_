const user_list = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "nephelometeradmin",
  },
];

// if (!JSON.parse(localStorage.getItem("user_list"))) {
//   localStorage.setItem("user_list", JSON.stringify(user_list));
// }

function registerUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email_register").value;
  const password = document.getElementById("password_register").value;
  const terms = document.getElementById("terms").checked;
  const newUser = {
    username,
    email,
    password,
    terms,
  };
  const user_local_list = JSON.parse(localStorage.getItem("user_list")) || [];

  // kiem tra ngoai le ------------------------
  // kiem tra du lieu nhap vao
  if (username === "" || email === "" || password === "" || !terms) {
    alert("Vui lòng điền đầy đủ thông tin và đồng ý với điều khoản.");
    return;
  }
  // kiem tra co bi trung user cu khong
  const duplicate_users = user_local_list.filter(function (u) {
    return username === u.username || email === u.email;
  });
  if (duplicate_users.length) {
    alert(
      "Tai khoan da ton tai tren he thong, vui long chuyen den trang dang nhap"
    );
    return;
  }

  // Lưu dữ liệu vào Local Storage -----------------------
  user_local_list.push(newUser);
  // set lai list cho local storage
  localStorage.setItem("user_list", JSON.stringify(user_local_list));
  alert("Đăng ký thành công!");
  // chuyen sang dang nhap
  location.href = "./register.html";
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("remember") === "true") {
    document.getElementById("email_login").value =
      localStorage.getItem("email");
    document.getElementById("password_login").value =
      localStorage.getItem("password");
    document.getElementById("remember").checked = true;
  }
});

function loginUser() {
  const email = document.getElementById("email_login").value;
  const password = document.getElementById("password_login").value;
  const remember = document.getElementById("remember").checked;
  const user_local_list = JSON.parse(localStorage.getItem("user_list")) || [];

  const user_found = user_local_list.filter(function (u) {
    return password === u.password || email === u.email;
  });
  if (user_found.length) {
    if (remember) {
      localStorage.setItem("remember", "true");
    } else {
      localStorage.removeItem("remember");
    }
    // luu nguoi dung hien tai
    localStorage.setItem("current_user", JSON.stringify(user_found[0]));
    alert("Đăng nhập thành công!");
    window.location.href = "../index.html"; // Chuyển hướng đến trang chào mừng
  } else {
    alert("Email hoặc mật khẩu không đúng.");
    return;
  }
}

// bat su kien cho button login ------------------------------------------------
document.getElementById("login_btn").onclick = function (event) {
  event.preventDefault();
  loginUser();
};

// bat su kien cho button register ------------------------------------------------
document.getElementById("signup_btn").onclick = function (event) {
  event.preventDefault();
  registerUser();
};
