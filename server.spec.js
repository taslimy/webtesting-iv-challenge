const server = require("./server");

const supertest = require("supertest");

describe("server", () => {
  describe("GET", () => {
    it("should responds with a 200 ok", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });

    it("Should return a list of users", async () => {
      await supertest(server)
        .get("/users")
        .expect("Content-Type", /json/i);
    });
  });
});
