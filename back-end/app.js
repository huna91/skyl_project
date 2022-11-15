const fs = require("fs");
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = 3003;

app.listen(PORT, () => {
  `${PORT} 번 포트 연결 성공`;
});

const option = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(options));
