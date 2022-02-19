const request = require("supertest");
const app = require("../app.js");

describe("POST /command_2", () => {
  describe("when passed a username, password and authentication header", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app)
        .post("/command_2")
        .set("authorization", "testing_token_1234")
        .send({
          username: "username",
          password: "password",
        });
      expect(response.statusCode).toBe(200);
    });
  });

  describe("when passed incorrect username, password or authentication token", () => {
    test("should respond with 401 status code", async () => {
      const response = await request(app)
        .post("/command_2")
        .set("authorization", "not_testing_token_1234")
        .send({
          username: "not_username",
          password: "not_password",
        });
      expect(response.statusCode).toBe(401);
    });
  });
});
