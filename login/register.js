// Server URI = http://localhost:8882
// ---------------------------------------------------------
// 회원가입 URI = http://localhost:8882/register -> post
// -> request: { email : string, password : string, nickname: string }
//? 성공시
// -> response : { success: true }
//! 실패시
// -> response : { success: false, message: '실패이유'}
// ---------------------------------------------------------
// 로그인 URI = http://localhost:8882/login -> post
// -> requst: { email: string, password: string }
//? 성공시
// -> response: { success: true , user: { id: 0, email: ~~~, nickname: ~~}}
//! 실패시
// -> response: { success: false, message: '실패이유'}

/**비동기
 * 비동기란? 요청의 로직을 수행하도록 시켜놓고 다음 코드로 넘어가는것 -> 결과가 아직 안나온 상태
 * 비동기의 리턴되는 객체 -> Promise 객체
 * Promise 객체는 실행중인 상태
 * 실행에 정상적으로 성공한다면 : then()으로 처리할 수 있다.
 * 실행에 에러가 발생한다면(실패) : catch()로 처리할 수 있다.
 */

/** 구현 할 내용들(로직만든다 ? -> 한글로 먼저 작성되어야한다)
 * 1. 회원가입을 위해서 사용자가 입력한 데이터들을 가져온다.
 * 2. 가져온 데이터들을 확인(유효성 검사)을 한다.
 * 3. 데이터가 잘 입력 되었다면, 서버로 회원가입 요청을 한다.
 * 4. 회원가입 요청 응답에 따라서 처리를 한다.
 *   a. 회원가입 요청 : 비동기!
 *   b. 회원가입 요청의 응답으로 (실행, 완료 -> 성공, 실패)
 * 5-1. 회원가입에 성공했다. -> 로그인창으로 이동시키는 로직
 * 5-2. 회원가입에 실패했다. -> 실패한 이유를 사용자에게 피드백을 줘야한다.
 */

// form 태그를 가져와야한다.
const form = document.querySelector(".register-form");
// form에서 submit을 눌렀을 때 값들을 가져온다.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // email, password, password-confirm, nickname
  const target = event.currentTarget;
  const email = target[0].value;
  const password = target[1].value;
  const passwordConfirm = target[2].value;
  const nickname = target[3].value;
  const err = document.querySelector(".error");

  // validation -> 유효성 검사
  if (
    email.length > 0 &&
    password.length > 0 &&
    password === passwordConfirm &&
    nickname.length > 0
  ) {
    err.textContent = "";

    //서버로 회원가입 요청을 한다.
    axios
      .post("http://localhost:8882/register", {
        email: email,
        password: password,
        nickname: nickname,
      })
      .then((response) => {
        const success = response.data.success;
        // 로그인 창으로 이동
      })
      .catch((error) => {
        console.dir(error);
        const message = error.response.data.message;
        console.log(message);
        err.textContent = message;
      });
  } else {
    err.textContent = "입력값을 확인해 주세요";
    // 실패
  }
});
