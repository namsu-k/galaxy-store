// 네비게이션 메뉴 표시 상태 변경
function updateNavigationMenu() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  const navbarMenu = document.querySelector(".navbarMenu");
  const userMenuItems = navbarMenu.querySelectorAll("li");

  if (isLoggedIn === "true") {
    // 로그인한 경우
    userMenuItems.forEach((item) => {
      if (item.classList.contains("loggedIn")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  } else {
    // 로그인하지 않은 경우
    userMenuItems.forEach((item) => {
      if (item.classList.contains("loggedOut")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}

// 페이지 로드 시 메뉴 업데이트
window.addEventListener("load", updateNavigationMenu);
