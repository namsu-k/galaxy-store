const scrollTop = function () {
  // create HTML button element
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  // hide/show button based on scroll distance
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  // scroll to top when button clicked
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};
scrollTop();

// 세션 저장소에서 상품 정보 가져오기
var sangseimgUrl = sessionStorage.getItem("sangseimgUrl");
var productName = sessionStorage.getItem("productName");
var price = sessionStorage.getItem("price");
var imageUrl = sessionStorage.getItem("imageUrl");

// 상품 정보를 화면에 표시하는 함수
function displayProductInfo() {
  var productImage = document.getElementById("productImage");
  var productNameElement = document.getElementById("productName");
  var priceElement = document.getElementById("price");
  var productImage2 = document.getElementById("productImage2");

  // 이미지 URL, 상품 코드, 상품명, 가격을 화면 요소에 설정
  productImage.src = imageUrl;
  productNameElement.textContent = "상품명: " + productName;
  priceElement.textContent = "가격: " + price + " 원";
  productImage2.src = sangseimgUrl;
}

// 페이지 로드 시 상품 정보 표시 함수 호출
displayProductInfo();

// 세션 스토리지에서 장바구니 정보 가져오기
var cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];

// 장바구니에 상품 추가
function addToCart() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);
  alert("장바구니에 추가되었습니다,");

  // 장바구니에 추가할 상품 정보 및 수량 저장
  var cartItem = {
    productName: productName,
    price: price,
    image: imageUrl,
    quantity: quantity,
  };

  // 세션 스토리지에 저장
  cartItems.push(cartItem);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

  // 수량과 총 금액 표시 업데이트
  updateCartDisplay();
}

// 바로 구매하기
function buyNow() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);

  // 장바구니에 추가할 상품 정보 및 수량 저장
  var cartItem = {
    productName: productName,
    price: price,
    quantity: quantity,
  };

  // 장바구니에 저장
  var cartItems = [cartItem];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // 이동할 페이지로 리다이렉트
  window.location.href = "cart.html";
}

// 수량 변경 시 총 금액 업데이트
function updateCartDisplay() {
  var quantityInput = document.getElementById("quantity");
  var quantity = parseInt(quantityInput.value);

  var totalPrice = parseInt(price) * quantity;

  var displayQuantity = document.getElementById("displayQuantity");
  var totalPriceElement = document.getElementById("totalPrice");

  displayQuantity.textContent = quantity;
  totalPriceElement.textContent = totalPrice;
}

// 수량 변경 이벤트 리스너
var quantityInput = document.getElementById("quantity");
quantityInput.addEventListener("change", updateCartDisplay);

// 페이지 로드 시 수량 및 총 금액 표시 업데이트
updateCartDisplay();
function saveProductInfo(productCode, productName, price, imageUrl) {
  sessionStorage.setItem("price", price);
  sessionStorage.setItem("productName", productName);
  sessionStorage.setItem("imageUrl", imageUrl);
}
