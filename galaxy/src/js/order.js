document.addEventListener("DOMContentLoaded", function () {
  const productInfo = JSON.parse(sessionStorage.getItem("productInfo"));

  const quantityInput = document.getElementById("quantity");
  const displayQuantity = document.getElementById("displayQuantity");
  const totalPriceDisplay = document.getElementById("totalPrice");
  const addCartBtn = document.querySelector(".addCartBtn");

  let productPrice = productInfo.price;

  // 초기값 표시
  //   displayQuantity.textContent = quantityInput.value;
  totalPriceDisplay.textContent = productPrice;

  // 수량 변경 이벤트
  quantityInput.addEventListener("input", function () {
    const quantity = parseInt(quantityInput.value);
    console.log(quantity);
    const totalPrice = quantity * productPrice;
    totalPriceDisplay.textContent = totalPrice;
  });

  // 장바구니에 추가 버튼 클릭 이벤트
  addCartBtn.addEventListener("click", function () {
    const quantity = parseInt(quantityInput.value);
    const totalAmount = quantity * productPrice;

    let cartItems = [];

    const cartItem = {
      productName: productInfo.productName,
      productPrice: productPrice,
      productImage: productInfo.imageUrl,
      productQuantity: quantity,
    };

    if (!sessionStorage.getItem("cartItems")) {
      cartItems.push(cartItem);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      cartItems.push(cartItem);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    alert(`${quantity}개 상품이 장바구니에 추가되었습니다.`);
  });
});
