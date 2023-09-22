document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.querySelector(".registration-form");
  const idInput = document.getElementById("idInput");
  const emailInput = document.getElementById("email");
  const birthYearInput = document.getElementById("birthYear");
  const birthMonthInput = document.getElementById("birthMonth");

  // 중복 확인 버튼 클릭 이벤트
  const idCheckButton = document.querySelector("#checkId");
  idCheckButton.addEventListener("click", function () {
    const enteredId = idInput.value;
    const existingUser = users.find((user) => user.userId === enteredId);

    if (existingUser) {
      alert("이미 사용 중인 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다.");
    }
  });

  // 이메일 중복 확인 버튼 클릭 이벤트
  const emailCheckButton = document.querySelector("#checkEmailId");
  emailCheckButton.addEventListener("click", function () {
    const enteredEmail = emailInput.value;
    const existingUser = users.find((user) => user.email === enteredEmail);

    if (existingUser) {
      alert("이미 사용 중인 이메일입니다.");
    } else {
      alert("사용 가능한 이메일입니다.");
    }
  });

  // 회원가입 버튼 클릭 이벤트
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 양식 유효성 검사 및 필요한 작업을 수행하는 로직을 여기에 추가
    const name = document.getElementById("name").value;
    const id = idInput.value;
    const pwd = document.getElementById("pwd").value;
    const email = emailInput.value;
    const birthYear = birthYearInput.value;
    const birthMonth = birthMonthInput.value;

    // 예시로 아래와 같이 유효성 검사를 수행할 수 있습니다.
    if (!name || !id || !pwd || !email || !birthYear || !birthMonth) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 검사 후 유효한 경우 세션 스토리지에 사용자 정보 추가 및 알림
    const newUser = {
      userName: name,
      userId: id,
      userPw: pwd,
      email: email,
      birthYear: birthYear,
      birthMonth: birthMonth,
    };

    users.push(newUser);
    sessionStorage.setItem("users", JSON.stringify(users));

    alert("회원가입이 완료되었습니다.");
    window.location.href = "login.html";
  });
});

const cancelBtn = document.querySelector("#cancelSignUpBtn");
cancelBtn.addEventListener("click", function () {
  window.location.href = "local_in.html";
});

// 이미 등록된 사용자 데이터
const users = JSON.parse(sessionStorage.getItem("users")) || [];
