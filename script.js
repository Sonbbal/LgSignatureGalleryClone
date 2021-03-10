// 네비게이션 스크롤 기능

const NAVIGATION_ELEMENT_ARRAY = document.querySelectorAll(
  "ul#navigation > li"
);

const section_id_arry = [
  "section_1",
  "section_2",
  "section_3",
  "section_4",
  "section_5",
  "section_6",
];

for (let i = 0; i < NAVIGATION_ELEMENT_ARRAY.length; i++) {
  NAVIGATION_ELEMENT_ARRAY[i].addEventListener("click", () => {
    document
      .getElementById(section_id_arry[i])
      .scrollIntoView({ behavior: "smooth" });
  });
}

// 스크롤 위치 네비게이션에 표시하기
function getOffsetTop(_id) {
  let topPosition = document.getElementById(_id).offsetTop;
  return topPosition;
}
function classListHandle(currentY, height) {
  let el = 0;
  let positions = currentY + 200;
  if (positions < height[1]) {
    el = 0;
  } else if (positions >= height[1] && positions < height[2]) {
    el = 1;
  } else if (positions >= height[2] && positions < height[3]) {
    el = 2;
  } else if (positions >= height[3] && positions < height[4]) {
    el = 3;
  } else if (positions >= height[4] && positions < height[5]) {
    el = 4;
  } else if (positions >= height[5]) {
    el = 5;
  } else {
    el = 0;
  }

  if (!NAVIGATION_ELEMENT_ARRAY[el].classList.contains("active")) {
    // 전체 엘리먼트 에서 active 제거
    for (let i = 0; i < NAVIGATION_ELEMENT_ARRAY.length; i++) {
      if (NAVIGATION_ELEMENT_ARRAY[i].classList.contains("active")) {
        NAVIGATION_ELEMENT_ARRAY[i].classList.remove("active");
      }
    }
    // 해당 엘리먼트에 active class 추가
    NAVIGATION_ELEMENT_ARRAY[el].classList.add("active");
    return;
  }
}

window.addEventListener("scroll", () => {
  let currentY = window.scrollY;
  let sectionsOffsetTop = [];
  for (let i = 0; i < section_id_arry.length; i++) {
    sectionsOffsetTop.push(getOffsetTop(section_id_arry[i]));
  }
  classListHandle(currentY, sectionsOffsetTop);
});

// 메인페이지 하단 버튼 스크롤 기능

const SCROLL_BTN = document.querySelector(".scrollImg > a");
SCROLL_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 50, left: 0, behavior: "smooth" });
});

// 색션 3 더보기 버튼

const moreBtn = document.querySelector(".moreBtn");
const openTarget = document.querySelector(
  ".designStory--introduce--info__content"
);
moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openTarget.classList.toggle("open");
});

// 색션 4 비디오 변경

const subVideoElement = document.querySelectorAll(".sub__video__container");
let mainItemKey = 0;
let subItemKey = [1, 2, 3, 4];

const data = [
  {
    key: 0,
    innerText: "시그니처관 풀버전",
    videoSrc: "https://www.youtube.com/embed/v_3i6R2F56E",
    imgSrc: "zone_0.jpg",
  },
  {
    key: 1,
    innerText: "냉장고 Zone 전시",
    videoSrc: "https://www.youtube.com/embed/kHXl9X8B1ro",
    imgSrc: "zone_1.jpg",
  },
  {
    key: 2,
    innerText: "세탁기 Zone 전시",
    videoSrc: "https://www.youtube.com/embed/AUfl0sOlVP0",
    imgSrc: "zone_2.jpg",
  },
  {
    key: 3,
    innerText: "TV Zone 전시",
    videoSrc: "https://www.youtube.com/embed/zFALwzn1gyA",
    imgSrc: "zone_3.jpg",
  },
  {
    key: 4,
    innerText: "에어컨 Zone 전시",
    videoSrc: "https://www.youtube.com/embed/zCUDPsIf4pY",
    imgSrc: "zone_4.jpg",
  },
];

const mainVideoHandler = (item) => {
  document.querySelector("#main__video__title").innerText = item.innerText;
  document.querySelector("#youtube360 > iframe").src = item.videoSrc;
};

const subVideoHandler = (clickedNumber, mainItemNumber) => {
  const imgBaseUrl = subVideoElement[clickedNumber].querySelector(
    ".sub__video__img"
  );
  const subVideoTitle = subVideoElement[clickedNumber].querySelector(
    ".sub__video__title"
  );
  let mainKey = mainItemNumber;
  let selectKey = subItemKey[clickedNumber];

  // 이미지 주소 변경
  imgBaseUrl.src = imgBaseUrl.src.slice(0, -10) + data[mainItemNumber].imgSrc;
  // 타이틀 변경
  subVideoTitle.innerText = data[mainItemNumber].innerText;
  // 키 number 변경
  mainItemKey = subItemKey[clickedNumber];
  subItemKey[clickedNumber] = mainKey;

  mainVideoHandler(data[selectKey]);
};

subVideoElement[0].addEventListener("click", () => {
  subVideoHandler(0, mainItemKey);
});
subVideoElement[1].addEventListener("click", () => {
  subVideoHandler(1, mainItemKey);
});
subVideoElement[2].addEventListener("click", () => {
  subVideoHandler(2, mainItemKey);
});
subVideoElement[3].addEventListener("click", () => {
  subVideoHandler(3, mainItemKey);
});
