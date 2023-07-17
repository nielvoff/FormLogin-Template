function showAlert() {
  swal("Login Berhasil!", "Selamat datang!", "success").then(function () {
    window.location.href = "../pages/html/index.html";
  });
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Mengambil nilai username dan password dari input
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Memeriksa apakah username dan password sesuai
  if (username === "syahla" && password === "202580") {
    showAlert();
  } else {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    swal("Login Gagal", "Username atau password salah!", "error");
  }
});
