// 로그인 로직 작성하기
/**
 * 1.
 */
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.dir(event);

  const target = event.currentTarget;
  const email = target[0].value;
  const password = target[1].value;
  const err = document.querySelector(".err");

  axios
    .post("http://localhost:8882/login", {
      email,
      password,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });

  // axios
  //   .get("http://localhost:8882/login", {
  //     email: email,
  //     password: password,
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data.message);
  //   });
});
