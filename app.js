const express = require("express");
const app = express();

app.use(express.json());

app.post("/command_1", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  res.send({ userId: 0 });
});

app.post("/command_2", async (req, res) => {
  const AuthToken = req.headers.authorization;
  const { username, password } = req.body;

  if (
    !AuthToken ||
    !username ||
    !password ||
    AuthToken !== "testing_token_1234" ||
    username !== "username" ||
    password !== "password"
  ) {
    res.sendStatus(401);
    return;
  }

  res.sendStatus(200);
});

app.post("/command_3", async (req, res) => {
  const AuthToken = req.headers.authorization;
  const { username, password } = req.body;

  if (
    !AuthToken ||
    !username ||
    !password ||
    AuthToken !== "testing_token_1234" ||
    username !== "username" ||
    password !== "password"
  ) {
    res.sendStatus(401);
    return;
  }

  res.send({ userId: 12345678 });
});

app.post("/command_4", async (req, res) => {
  const AuthToken = req.headers.authorization;
  const { username, password, base64code } = req.body;

  var base64 =
    /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

  const encoded_string = base64.test(base64code);

  if (
    !AuthToken ||
    !username ||
    !password ||
    AuthToken !== "testing_token_1234" ||
    username !== "username" ||
    password !== "password" ||
    encoded_string === false
  ) {
    res.sendStatus(401);
    return;
  }

  res.send({ userId: 12345678 });
});

module.exports = app;
