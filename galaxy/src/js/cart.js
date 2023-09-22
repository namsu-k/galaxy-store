// 장바구니 아이템 가져오기
const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));

// 장바구니 아이템 표시 함수
function displayCartItems() {
  if (cartItems == null) {
    return;
  }
  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  //   cartItemsDiv.innerHTML = ""; // 기존 내용 비우기

  // 총 금액
  let totalPrice = 0;

  // 각 아이템에 대한 HTML 생성 및 총 금액 계산
  cartItems.forEach(function (item) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cartItem";

    const itemImage = document.createElement("img");
    itemImage.src = item.productImage;
    itemImage.alt = "Product Image";
    itemImage.width = "120";
    itemImage.height = "120";
    itemDiv.appendChild(itemImage);

    const itemInfoDiv = document.createElement("div");
    itemDiv.appendChild(itemInfoDiv);

    const itemName = document.createElement("p");
    itemName.style.textAlign = "left";
    itemName.textContent = "상품명: " + item.productName;
    itemInfoDiv.appendChild(itemName);

    const itemQuantity = document.createElement("p");
    itemQuantity.style.textAlign = "left";
    itemQuantity.textContent = "수량: " + item.productQuantity;
    itemInfoDiv.appendChild(itemQuantity);

    const itemPrice = document.createElement("p");
    itemPrice.style.textAlign = "left";
    const sum = item.productPrice * item.productQuantity;
    itemPrice.textContent = "가격: " + sum + " 원";
    itemInfoDiv.appendChild(itemPrice);

    cartItemsDiv.appendChild(itemDiv);

    const itemTotal = parseInt(item.productPrice) * item.productQuantity;
    totalPrice += itemTotal;
  });

  // 총 금액 표시
  totalPriceElement.innerText = totalPrice;
}

// 장바구니 아이템 표시 호출
displayCartItems();

// 초기화 버튼 클릭 시 장바구니 초기화 함수
function clearCart() {
  sessionStorage.removeItem("cartItems");
  displayCartItems();
  window.location.reload();
}

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearCart);

// 구매하기 버튼 클릭 시 선택된 상품만 구매 함수
function purchaseItems() {
  var checkboxes = document.getElementsByClassName("itemCheckbox");
  var selectedItems = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var productCode = checkboxes[i].value;
      var selectedItem = cartItems.find(function (item) {
        return item.productCode === productCode;
      });
      selectedItems.push(selectedItem);
    }
  }

  alert("구매 완료");
  clearCart();
}

const purchaseBtn = document.querySelector(".purchase-btn");
purchaseBtn.addEventListener("click", purchaseItems);
