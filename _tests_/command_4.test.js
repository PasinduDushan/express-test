const request = require("supertest");
const app = require("../app.js");

describe("POST /command_4", () => {
  describe("when passed credentials to the server", () => {
    describe("when passed correct username, password and authentication header", () => {
      test("should respond with a 200 status code", async () => {
        const response = await request(app)
          .post("/command_4")
          .set("authorization", "testing_token_1234")
          .send({
            username: "username",
            password: "password",
            base64code: "dGVzdGluZ190b2tlbl8xMjM0",
          });
        expect(response.statusCode).toBe(200);
      });
    });

    describe("when passed incorrect username, password or authentication token", () => {
      test("should respond with 401 status code", async () => {
        const response = await request(app)
          .post("/command_4")
          .set("authorization", "not_testing_token_1234")
          .send({
            username: "not_username",
            password: "not_password",
          });
        expect(response.statusCode).toBe(401);
      });
    });

    test("should specify json as the content type in the http header", async () => {
      const response = await request(app)
        .post("/command_4")
        .set("authorization", "testing_token_1234")
        .send({
          username: "username",
          password: "password",
          base64code: "dGVzdGluZ190b2tlbl8xMjM0",
        });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("should contain a userId in the response body", async () => {
      const response = await request(app)
        .post("/command_4")
        .set("authorization", "testing_token_1234")
        .send({
          username: "username",
          password: "password",
          base64code: "dGVzdGluZ190b2tlbl8xMjM0",
        });
      expect(response.body.userId).toBeDefined();
    });

    describe("when passed a wrong base64 code", () => {
      test("should respond with 401 status code", async () => {
        const response = await request(app)
          .post("/command_4")
          .set("authorization", "testing_token_1234")
          .send({
            username: "username",
            password: "password",
            base64code: "iodhfioewfiobviod",
          });
        expect(response.statusCode).toBe(401);
      });
    });
  });
});
