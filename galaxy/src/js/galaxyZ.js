// 선택한 상품 데이터를 세션 스토리지에 저장하는 함수
const saveProductInfo = (
  category,
  quantity,
  description,
  imageUrl,
  productName,
  price
) => {
  const productInfo = {
    category: category,
    quantity: quantity,
    description: description,
    imageUrl: imageUrl,
    productName: productName,
    price: price,
  };

  sessionStorage.setItem("productInfo", JSON.stringify(productInfo));
};

// 상품 데이터 로드
const products = JSON.parse(sessionStorage.getItem("products"));

// 상품을 동적으로 생성하는 함수
const createProductElements = () => {
  const productContainer = document.querySelector(".content");

  // category가 "first"인 항목만 필터링
  const firstCategoryProducts = products.filter(
    (product) => product.category === "galaxyZ"
  );

  firstCategoryProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productLink = document.createElement("a");
    productLink.href = "productDetail.html";

    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.alt = product.productName;

    const productName = document.createElement("div");
    productName.textContent = product.productName;

    const productPrice = document.createElement("div");
    productPrice.textContent = `가격: ${product.price} 원`;

    productLink.appendChild(productImage);
    productLink.appendChild(productName);
    productLink.appendChild(productPrice);

    productDiv.appendChild(productLink);
    productContainer.appendChild(productDiv);

    // 상품 선택 이벤트 처리
    productLink.addEventListener("click", () => {
      saveProductInfo(
        product.category,
        product.quantity,
        product.description,
        product.imageUrl,
        product.productName,
        product.price
      );
    });
  });
};

// 페이지 로드 시 상품 생성 함수 호출
window.onload = createProductElements;
