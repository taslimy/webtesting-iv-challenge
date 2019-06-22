const { insert, remove } = require("./usersModel");
const db = require("../data/dbConfig");

const request = require("supertest");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  // the process.env.DB_ENV is pointing to 'testing'
  it("should set enviroment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("should insert user", async () => {
      await insert({ name: "Matt" });
      await insert({ name: "Tas" });

      const users = await db("users");
      expect(users).toHaveLength(2);
    });
  });

  it("should remove provided user", async () => {
    const response = await insert({ name: "BillyBob" });

    await remove(response[0]);
    const users = await db("users");
    expect(users).toHaveLength(0);
  });
});
