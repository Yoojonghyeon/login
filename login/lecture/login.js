// 로그인 로직 작성하기
/**
 * 1.
 */
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(event);

  const target = event.currentTarget;
  const email = target[0].value;
  const password = target[1].value;
  const err = document.querySelector(".err");

  // node.js에서 GET 요청으로 원격 이미지 가져오기
  axios
    .get("http://localhost:8882/login", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
});
