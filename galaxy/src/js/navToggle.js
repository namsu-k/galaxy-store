document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  // 토글 버튼 클릭 시 사이드 메뉴 표시
  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.add("show");
  });

  // 닫기 버튼 클릭 시 사이드 메뉴 숨김
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
  });
});
