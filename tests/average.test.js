const request = require("supertest");
const { app, resetNumbers } = require("../src/app");

describe("POST /average", () => {
  beforeEach(() => {
    resetNumbers();
  });

  test("returns the first submitted number as the average", async () => {
    const response = await request(app)
      .post("/average")
      .send({ number: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body.average).toBe(10);
  });

  test("returns the average of all submitted numbers", async () => {
    await request(app)
      .post("/average")
      .send({ number: 10 });

    const response = await request(app)
      .post("/average")
      .send({ number: 20 });

    expect(response.statusCode).toBe(200);
    expect(response.body.average).toBe(15);
  });

  test("continues calculating the average for additional numbers", async () => {
    await request(app)
      .post("/average")
      .send({ number: 10 });

    await request(app)
      .post("/average")
      .send({ number: 20 });

    const response = await request(app)
      .post("/average")
      .send({ number: 30 });

    expect(response.statusCode).toBe(200);
    expect(response.body.average).toBe(20);
  });

  test("returns 400 when number is missing", async () => {
    const response = await request(app)
      .post("/average")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Please provide a valid number");
  });

  test("returns 400 when number is not a number", async () => {
    const response = await request(app)
      .post("/average")
      .send({ number: "hello" });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Please provide a valid number");
  });

  test("returns 400 when number is null", async () => {
    const response = await request(app)
      .post("/average")
      .send({ number: null });

    expect(response.statusCode).toBe(400);
  });
});