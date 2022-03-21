/* Youtube API */
const YOUTUBE_API = "AIzaSyDU2mRG2DV9eKUACzHUJ6w55LrhGurVeXk";

// 페이지 구성
//       - 메인페이지(상단 검색창 + 영상리스트)
//       - 검색창 마크업
//       - 검색창에 단어 입력한거 핸들링
//       - 검색한 단어를 API로 비동기 호출
//       - 검색 결과 확인 (리스트[배열]) → 썸네일이미지 → 리스트 하나의 요소가 어떤 형식인지 파악하는것이 중요
//       - 썸네일 이미지 + 제목 을 하나의 아이템으로 만들어 리스트로 만들어주기

const search = document.querySelector(".search");

search.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  const className = target.className;
  console.log(target);
  console.log(className);
});
