/* Search URL */
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search?";
/* Youtube API */
//const YOUTUBE_API = "AIzaSyDp1xf-c4d1doTJq7xp0pVpG9J7gcE1-wc";
/* ------------------------------ */

// 페이지 구성
//       - 메인페이지(상단 검색창 + 영상리스트) t
//       - 검색창 마크업 t
//       - 검색창에 단어 입력한거 핸들링 t
//       - 검색한 단어를 API로 비동기 호출 tzzz
//       - 검색 결과 확인 (리스트[배열]) → 썸네일이미지 → 리스트 하나의 요소가 어떤 형식인지 파악하는것이 중요 f
//       - 썸네일 이미지 + 제목 을 하나의 아이템으로 만들어 리스트로 만들어주기 f

const search = document.querySelector(".search");
const thumbnails = document.querySelector(".video__thumbnails");
const title = document.querySelector(".video__title");

search.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = event.currentTarget;
  const searchWord = target[0].value; //검색어 값
  const data = {
    key: "AIzaSyDp1xf-c4d1doTJq7xp0pVpG9J7gcE1-wc", //발급 키 string
    part: "snippet", // 관련 영상
    q: searchWord, // 검색어
    maxResults: 5, //영상 최대 개수
    type: "video",
    videoDuration: "long", //시간의 길이 hmm
  };
  const video = []; //검색한 영상 담을 그릇

  //       - 검색한 단어를 API로 비동기 호출
  axios
    .get("https://www.googleapis.com/youtube/v3/search?", { data })
    .then((res) => {
      console.log(res.data.items);
      const item = res.data.items;
      video.push(item);
      console.log(video);
    })
    .catch((err) => {
      console.log(err.response); //.data.error.message
    });
});
