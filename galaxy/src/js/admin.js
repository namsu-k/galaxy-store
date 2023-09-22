// admin.js

// 세션 스토리지에서 상품 데이터 가져오기
const storedProducts = JSON.parse(sessionStorage.getItem("products"));

// 편집 중인 상품 인덱스
let editingIndex = -1;

// 상품 데이터를 테이블에 추가하는 함수
const renderProductTable = () => {
  const productTableBody = document.getElementById("productTableBody");
  productTableBody.innerHTML = "";

  storedProducts.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <img src="${product.imageUrl}" alt="${product.imgAlt}" />
      </td>
      <td>${product.category}
      <td>${product.productName}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
      <td>
        <button onclick="startEditing(${index})">편집</button>
      </td>
    `;
    productTableBody.appendChild(row);
  });
};

// 상품 편집 시작
const startEditing = (index) => {
  editingIndex = index;
  renderProductTable();
  renderEditForm(index);
};

// 상품 데이터 편집 폼 렌더링
const renderEditForm = (index) => {
  const productTableBody = document.getElementById("productTableBody");
  const row = document.createElement("tr");
  const product = storedProducts[index];

  row.innerHTML = `
    <td><input type="text" value="${product.imageUrl}" id="editImgUrl"></td>
    <td><input type="text" value="${product.category}" id="editImgAlt"></td>
    <td><input type="text" value="${product.productName}" id="editName"></td>
    <td><input type="number" value="${product.price}" id="editPrice"></td>
    <td><input type="number" value="${product.quantity}" id="editQuantity"></td>
    <td>
      <button onclick="saveEdit()">저장</button>
      <button onclick="cancelEdit()">취소</button>
    </td>
  `;

  productTableBody.replaceChild(row, productTableBody.childNodes[index]);
};

// 상품 편집 저장
const saveEdit = () => {
  const newName = document.getElementById("editName").value;
  const newPrice = document.getElementById("editPrice").value;
  const newQuantity = document.getElementById("editQuantity").value;

  if (newName && newPrice && newQuantity) {
    storedProducts[editingIndex].productName = newName;
    storedProducts[editingIndex].price = newPrice;
    storedProducts[editingIndex].quantity = newQuantity;

    sessionStorage.setItem("products", JSON.stringify(storedProducts));
    editingIndex = -1;

    renderProductTable();
  } else {
    alert("모든 필드를 입력하세요.");
  }
};

// 상품 편집 취소
const cancelEdit = () => {
  editingIndex = -1;
  renderProductTable();
};

// 초기 렌더링
renderProductTable();

// 메인 페이지로 이동하는 함수
const goToMainPage = () => {
  window.location.href = "main.html";
};

// 메인 페이지로 돌아가는 버튼 클릭 시 이벤트 핸들러 등록
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", goToMainPage);
