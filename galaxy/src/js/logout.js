// main.js
document.addEventListener("DOMContentLoaded", function () {
  const logoutButton = document.getElementById("logout");

  // 로그아웃 버튼 클릭 시 처리
  logoutButton.addEventListener("click", function () {
    // 세션 스토리지에서 로그인 정보 삭제
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userRole");

    // 카트 정보 삭제
    sessionStorage.removeItem("cartItems");

    // 로그아웃 시 처리할 작업 추가 (예: 리다이렉션 또는 메시지 표시)
    alert("로그아웃되었습니다.");

    // 로그아웃 후 메인 페이지로 리다이렉션
    window.location.href = "main.html";
  });
});
