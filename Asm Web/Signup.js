$(document).ready(function () {
    // Chuyển đổi form
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
  
    // Xử lý đăng ký
    $('.register-form').submit(function (e) {
      e.preventDefault();
  
      const fullName = $(this).find('input').eq(0).val();
      const username = $(this).find('input').eq(1).val();
      const email = $(this).find('input').eq(2).val();
      const password = $(this).find('input').eq(3).val();
  
      const user = { fullName, username, email, password };
      localStorage.setItem("user", JSON.stringify(user));
  
      alert("Đăng ký thành công! Hãy đăng nhập.");
  
      // Reset form đăng ký
      $(this)[0].reset();
  
      // Tự động chuyển sang form đăng nhập
      $('.message a').click(); // sử dụng hiệu ứng toggle như bạn đã có
    });
  
    // Xử lý đăng nhập
    $('.login-form').submit(function (e) {
      e.preventDefault();
  
      const inputUsername = $(this).find('input').eq(0).val();
      const inputPassword = $(this).find('input').eq(1).val();
  
      const savedUser = JSON.parse(localStorage.getItem("user"));
  
      if (!savedUser) {
        alert("Chưa có tài khoản nào được đăng ký.");
        return;
      }
  
      if (
        inputUsername === savedUser.username &&
        inputPassword === savedUser.password
      ) {
        alert("Đăng nhập thành công!");
        window.location.href = "index.html"; // ← Chuyển tới Home
      } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
      }
    });
  });
  