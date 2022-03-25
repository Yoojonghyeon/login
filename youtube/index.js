/* Youtube API */
const YOUTUBE_API = "AIzaSyDU2mRG2DV9eKUACzHUJ6w55LrhGurVeXk";
let videoId, channelId;
// 페이지 구성
//       - 메인페이지(상단 검색창 + 영상리스트) t
//       - 검색창 마크업 t
//       - 검색창에 단어 입력한거 핸들링 t
//       - 검색한 단어를 API로 비동기 호출 f
//       - 검색 결과 확인 (리스트[배열]) → 썸네일이미지 → 리스트 하나의 요소가 어떤 형식인지 파악하는것이 중요 f
//       - 썸네일 이미지 + 제목 을 하나의 아이템으로 만들어 리스트로 만들어주기 f

const search = document.querySelector(".search");
//const searchWord = document.querySelector(".search__word").value;

search.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = event.currentTarget;
  const searchWord = target[0].value; //검색어 값

  const video = [];

  axios
    .get("https://www.googleapis.com/youtube/v3/search", {
      searchWord,
      YOUTUBE_API,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
});
