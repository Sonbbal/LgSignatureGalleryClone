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
