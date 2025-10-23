 
// HIỆU ỨNG TRƯỢT

document.addEventListener('DOMContentLoaded', () => {
    // --- Code Hiệu ứng trượt (NGANG) ---
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // --- Code Hiệu ứng trượt (DỌC) ---
    const forgotPassLink = document.getElementById('forgot-pass-link');
    const backToLoginLink = document.getElementById('back-to-login-link');
    const gotoSignupLink = document.getElementById('goto-signup-link');

    // Trượt NGANG sang Đăng Ký
    signUpButton.addEventListener('click', () => {
        container.classList.add('panel-active');
        container.classList.remove('show-forgot'); 
    });

    // Trượt NGANG về Đăng Nhập
    signInButton.addEventListener('click', () => {
        container.classList.remove('panel-active');
        container.classList.remove('show-forgot'); 
    });

    // Trượt DỌC xuống QMK
    forgotPassLink.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn link nhảy trang
        container.classList.add('show-forgot');
    });

    // Trượt DỌC về Đăng Nhập
    backToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('show-forgot');
    });

    // Trượt từ QMK sang Đăng Ký 
    gotoSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('panel-active');
        container.classList.remove('show-forgot');
    });

}); 
 //--- 2.1: Hàm validate cho ĐĂNG NHẬP  ---
function validateLogin() {
    const tendangnhap = document.getElementById("txttdn").value;
    const matkhau = document.getElementById("txtmk").value;
    if (tendangnhap === "") {
        alert("Vui lòng điền tên đăng nhập.");
        return false;
    }
    if (matkhau === "") {
        alert("Vui lòng điền mật khẩu.");
        return false;
    }
    alert("Đăng nhập thành công. Vui lòng chờ trong giây lát...");
    // Lưu tên người dùng và chuyển về trang chủ 
    onLoginSuccess(tendangnhap);
    return false; 
}

// --- 2.2: Hàm validate cho ĐĂNG KÝ  ---
function validateSignup() {
    const tendangky = document.getElementById("txttdk").value;
    const matkhau = document.getElementById("txtmk1").value; 
    const nhaplaimatkhau = document.getElementById("txtnlmk").value;
    const email = document.getElementById("txtemail1").value; 
    const sodienthoai = document.getElementById("txtsdt").value;
    const emailPattern = /^[a-zA-Z0-9.%+_]+@gmail+\.[a-z]{2,}$/;

    if(tendangky === "") { alert("Vui lòng nhập tên đăng ký"); return false; }
    if(matkhau === "") { alert("Vui lòng nhập mật khẩu"); return false; }
    if(nhaplaimatkhau !== matkhau) { alert("Xác nhận mật khẩu không đúng"); return false; }
    if(!emailPattern.test(email)) { alert("Vui lòng nhập đúng định dạng email (phải là @gmail)"); return false; }
    if(sodienthoai.length < 10 || sodienthoai.length > 11) { alert("Số điện thoại không hợp lệ"); return false; }

    alert("Đăng ký thành công. Đang chuyển hướng đến trang đăng nhập.");
    window.location.replace("/HTML/login1.html");
    return false; 
}

// --- 2.3: Hàm validate cho QMK  ---
function validateForgot() {
    // Dùng ID mới: "forgot-email" và "forgot-code"
    const email = document.getElementById("forgot-email").value;
    const code = document.getElementById("forgot-code").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return false;
    }
    if (code.length < 6 || code.length > 6) {
        alert("Mã xác thực không hợp lệ (yêu cầu 6 số).");
        return false;
    }
    alert("Xác thực thành công. Đang chuyển về trang đăng nhập.");
    window.location.replace("/HTML/login1.html"); 
    return false;
}

// Hàm sendcode 
function sendcode() {
    // Dùng ID mới: "forgot-email"
    const email = document.getElementById("forgot-email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        return false; 
    }
    alert("Vui lòng kiểm tra email để lấy mã xác thực.");
    return true;
}
// Chạy sau khi người dùng bấm nút "Đăng nhập" và thành công
function onLoginSuccess(username) {
    // Lưu tên người dùng
    localStorage.setItem('currentUser', username);
    // Quay về trang chủ (nơi đang chạy SPA)
    window.location.href = '/index.html'; 
}
