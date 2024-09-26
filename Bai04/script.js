// Chức năng show/hide mật khẩu
function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Kiểm tra tính hợp lệ của form
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Reset lỗi
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Kiểm tra định dạng email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = "Email không hợp lệ";
        isValid = false;
    }

    // Kiểm tra mật khẩu không được rỗng
    if (password === "") {
        passwordError.innerHTML = "Mật khẩu không được để trống";
        isValid = false;
    }

    return isValid;
}
