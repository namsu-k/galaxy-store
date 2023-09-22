document.addEventListener("DOMContentLoaded", () => {
  // 세션 스토리지에서 저장된 상품 정보 가져오기
  const productInfo = JSON.parse(sessionStorage.getItem("productInfo"));

  // 상품 정보가 있는지 확인 후 표시
  if (productInfo) {
    const mainContainer = document.querySelector(".main");

    // 이미지 표시
    const imageDiv = mainContainer.querySelector(".image");
    const imageTag = document.createElement("img");
    imageTag.src = productInfo.imageUrl;
    imageTag.alt = "Product Image";
    imageDiv.appendChild(imageTag);

    const detailContainer = mainContainer.querySelector(".detail");
    // 카테고리 표시
    const categoryDiv = detailContainer.querySelector(".category");
    categoryDiv.innerHTML = `카테고리: ${productInfo.category}`;

    // 상품명 표시
    const productNameDiv = detailContainer.querySelector(".productName");
    productNameDiv.innerHTML = `상품명: ${productInfo.productName}`;

    // 가격 표시
    const priceDiv = detailContainer.querySelector(".price");
    priceDiv.innerHTML = `가격: ${productInfo.price} 원`;

    // 수량 표시
    const quantityDiv = detailContainer.querySelector(".quantity");
    quantityDiv.innerHTML = `재고: ${productInfo.quantity}`;

    // 설명 표시
    const descDiv = mainContainer.querySelector(".desc");
    const p = document.createElement("p");
    p.innerHTML = `상세 설명: ${productInfo.description}`;
    descDiv.appendChild(p);
  }
});
