const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const PORT = 8882;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

let id = 0;
const users = [
  {
    email: "justin8491@naver.com",
    password: "1234",
    nickname: "justin",
  },
];

app.get("/", (req, res) => {
  res.send("로그인 회원가입 연습");
});

app.post("/register", (req, res) => {
  const { email, password, nickname } = req.body;
  // 아이디 체크
  const findUserEmail = users.find((user) => user.email === email);
  if (findUserEmail) {
    return res
      .status(400)
      .json({ success: false, message: "이미 존재하는 아이디" });
  }

  const findUserPw = users.find((user) => user.nickname === nickname);
  if (findUserPw) {
    return res
      .status(400)
      .json({ success: false, message: "이미 존재하는 닉네임" });
  }

  const user = { id, email, password, nickname };

  users.push(user);
  id++;

  return res.status(200).json({ success: true });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const findUserEmail = users.find((user) => user.email === email);
  if (!findUserEmail) {
    return res
      .status(402)
      .json({ success: false, message: "존재하지 않는 아이디" });
  }

  const findUserPw = findUserEmail.password === password;
  if (!findUserPw) {
    return res
      .status(400)
      .json({ success: false, message: "비밀번호가 틀립니다" });
  }

  return res.status(200).json({ success: true, user: findUserEmail });
});

app.listen(PORT, () => {
  console.log("Server Connected...");
});
