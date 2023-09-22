// 제품 데이터 세션 저장
const productDataLoad = () => {
  if (!sessionStorage.getItem("products")) {
    // 제품 데이터 배열
    const products = [];

    // 제품 데이터 생성
    const product1 = {
      category: "galaxyZ",
      sangseimgUrl: "../image/galaxyzfilp5.png",
      productName: "갤럭시 Z 플립5",
      price: "1329000",
      imageUrl: "../image/galaxyzfilp5.png",
      description:
        "나의 개성을 표현하는 혁신적인 플렉스 윈도우, 남기고 싶은 순간 바로 촬영하는 플렉스캠, 다양한 주머니에 쏙 들어가는 디자인",
      quantity: 99,
    };
    const product2 = {
      category: "galaxyZ",
      sangseimgUrl: "../image/galaxyzfold5.png",
      productName: "갤럭시 Z 폴드5",
      price: "2097700",
      description:
        "보다 가볍고 한 손에 들어오는 디자인, 고사양 게임을 즐길 수 있는 파워풀한 성능과 대화면, 더 쉽고 편리해진 멀티태스킹",
      imageUrl: "../image/galaxyzfold5.png",
      quantity: 99,
    };
    const product3 = {
      category: "galaxyZ",
      sangseimgUrl: "../image/galaxyzfilp4.png",
      productName: "갤럭시 Z 플립4",
      price: "1129000",
      description:
        "빠르게 충전하고 오래 사용하는 대용량 배터리, 다양한 각으로 사진/영상 촬영에 최적화된 플렉스캠, 슬림 힌지&베젤로 완성도를 높인 프리미엄 디자인",
      imageUrl: "../image/galaxyzfilp4.png",
      quantity: 99,
    };
    const product4 = {
      category: "galaxyZ",
      sangseimgUrl: "../image/galaxyzfold4.png",
      productName: "갤럭시 Z 폴드4",
      price: "1897700",
      description:
        "한 손에 편안하게 들어오는 프리미엄 디자인, 최적화된 비율로 더 커진 디스플레이, 어두워도, 흔들림 걱정없이 선명한 ",
      imageUrl: "../image/galaxyzfold4.png",
      quantity: 99,
    };
    const product5 = {
      category: "galaxyS",
      sangseimgUrl: "../image/galaxys23ultra.png",
      productName: "갤럭시 S23 Ultra",
      price: "1599400",
      description:
        "고사양 게임을 마음껏 즐길 수 있는 파워풀한 퍼포먼스, 2억 화소로 선명하고, 100배 줌에도 흔들림 걱정 없는 카메라, 필요한 순간에 손쉽게 스마트한 일상을 만드는 S펜",
      imageUrl: "../image/galaxys23ultra.png",
      quantity: 99,
    };
    const product6 = {
      category: "galaxyS",
      sangseimgUrl: "../image/galaxys23plus.png",
      productName: "갤럭시 S23+",
      price: "1353000",
      description:
        "보고 싶은 영상을 마음껏 즐길 수 있는 파워풀한 퍼포먼스, 어두워도 밝게, 셀피는 감성적으로 급이 다른 카메라, 갤럭시의 아이덴티티를 완성하는 디자인",
      imageUrl: "../image/galaxys23plus.png",
      quantity: 99,
    };
    const product7 = {
      category: "galaxyS",
      sangseimgUrl: "../image/galaxys23.png",
      productName: "갤럭시 S23",
      price: "1155000",
      description:
        "보고 싶은 영상을 마음껏 즐길 수 있는 파워풀한 퍼포먼스, 어두워도 밝게, 셀피는 감성적으로 급이 다른 카메라, 갤럭시의 아이덴티티를 완성하는 디자인",
      imageUrl: "../image/galaxys23.png",
      quantity: 99,
    };
    const product8 = {
      category: "galaxyS",
      sangseimgUrl: "../image/galaxys22.png",
      productName: "갤럭시 S22",
      price: "955000",
      description:
        "감각적인 컬러와 트렌디한 디자인, 어둠 속에서도 선명한 나이토그래피 카메라, 더 쉽고 똑똑해진 AI 편집",
      imageUrl: "../image/galaxys22.png",
      quantity: 99,
    };
    const product9 = {
      category: "galaxyA",
      sangseimgUrl: "../image/galaxya24.png",
      productName: "갤럭시 A24",
      price: "396000",
      description:
        "FHD+ Super AMOLED 대화면 디스플레이, OIS를 지원하는 고화소 카메라, 5,000 mAh의 대용량 배터리",
      imageUrl: "../image/galaxya24.png",
      quantity: 99,
    };
    const product10 = {
      category: "galaxyA",
      sangseimgUrl: "../image/galaxya345g.png",
      productName: "갤럭시 A34 5G",
      price: "499400",
      description:
        "Super AMOLED 120 Hz 대화면, OIS를 지원하는 48 MP 고화소카메라, 물과 먼지로부터 지켜주는 IP67 방수방진",
      imageUrl: "../image/galaxya345g.png",
      quantity: 99,
    };
    const product11 = {
      category: "galaxyA",
      sangseimgUrl: "../image/galaxya335g.png",
      productName: "갤럭시 A33 5G",
      price: "399400",
      description:
        "IP67 방수방진, 고화소 쿼드 카메라(OIS), 90 Hz Super AMOLED 디스플레이",
      imageUrl: "../image/galaxya335g.png",
      quantity: 99,
    };
    const product12 = {
      category: "galaxyA",
      sangseimgUrl: "../image/galaxya23.png",
      productName: "갤럭시 A23",
      price: "299400",
      description:
        "90 Hz 167.2 mm 대화면 디스플레이, OIS를 지원하는 50 MP 고화소 카메라, 128 GB의 넉넉한 메모리",
      imageUrl: "../image/galaxya23.png",
      quantity: 99,
    };

    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products.push(product5);
    products.push(product6);
    products.push(product7);
    products.push(product8);
    products.push(product9);
    products.push(product10);
    products.push(product11);
    products.push(product12);

    sessionStorage.setItem("products", JSON.stringify(products));
  }
};

// 제품 데이터 로드
productDataLoad();

// 테스트 유저 데이터 세팅
const userDataLoad = () => {
  if (!sessionStorage.getItem("users")) {
    // 유저 데이터 배열
    const users = [];

    // 테스트 유저 데이터 생성
    for (let i = 0; i < 2; i++) {
      const testUser = {
        userName: `test${i}`,
        userId: `test${i}`,
        userPw: `test${i}`,
        mailId: `test${i}`,
        email: "test.com",
        birthYear: `111${i}`,
        birthMonth: `${i}`,
      };

      // 배열에 테스트 데이터 추가
      users.push(testUser);
    }

    // 세션에 저장
    sessionStorage.setItem("users", JSON.stringify(users));
  }
};

// 테스트 유저 데이터 로드
userDataLoad();

// 어드민 유저 세팅
const adminDataLoad = () => {
  if (!sessionStorage.getItem("admins")) {
    const admins = [];

    const admin = {
      adminId: "admin",
      adminPw: "1234",
    };

    admins.push(admin);

    sessionStorage.setItem("admins", JSON.stringify(admins));
  }
};

adminDataLoad();
