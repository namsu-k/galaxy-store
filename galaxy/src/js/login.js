document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login");
  const adminLoginButton = document.getElementById("adminLogin");

  loginButton.addEventListener("click", function () {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("password");

    const enteredId = idInput.value;
    const enteredPassword = passwordInput.value;

    // 세션 스토리지에서 저장된 사용자 정보 가져오기
    const storedUsers = JSON.parse(sessionStorage.getItem("users"));

    // 사용자 배열에서 입력한 아이디와 일치하는 사용자 찾기
    const user = storedUsers.find((user) => user.userId === enteredId);

    if (user && user.userPw === enteredPassword) {
      // 로그인 정보 세션 스토리지에 저장
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      sessionStorage.setItem("userRole", JSON.stringify("user"));

      // 메인 페이지로 리다이렉션
      window.location.href = "main.html";
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  });

  adminLoginButton.addEventListener("click", function () {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("password");

    const enteredId = idInput.value;
    const enteredPassword = passwordInput.value;

    // 세션 스토리지에서 저장된 어드민 정보 가져오기
    const storedAdmins = JSON.parse(sessionStorage.getItem("admins"));

    // 어드민 배열에서 입력한 아이디와 일치하는 어드민 찾기
    const admin = storedAdmins.find((admin) => admin.adminId === enteredId);

    if (admin && admin.adminPw === enteredPassword) {
      // 로그인 정보 세션 스토리지에 저장
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      sessionStorage.setItem("userRole", JSON.stringify("admin"));

      // 어드민 페이지로 리다이렉션
      window.location.href = "adminPage.html";
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  });
});
