const express = require("express");
const app = express();

app.use(express.json());

app.post("/command_1", async (req, res) => {
  const { username, password } = req.body;
  
  //Write your code
});

app.post("/command_2", async (req, res) => {
  // example of how to get authentication token. => const AuthToken = req.headers.authorization;
  const { username, password } = req.body;

  //Write your code
});

app.post("/command_3", async (req, res) => {
  //Example of how to get authentication token => const AuthToken = req.headers.authorization;
  const { username, password } = req.body;

  //Write your code
});

app.post("/command_4", async (req, res) => {
  //Example of how to get authentication token => const AuthToken = req.headers.authorization;
  const { username, password, base64code } = req.body;

  //Write your code
});

module.exports = app;
