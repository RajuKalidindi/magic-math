const request = require("supertest");
const app = require("./app");

describe("Magic Math API Tests", () => {
	test("GET /10 should return a valid result", async () => {
		const response = await request(app).get("/10");
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("result");
		expect(typeof response.body.result).toBe("number");
		expect(response.body.result).toBe(364);
	});

	test("GET /-5 should return a 400 error", async () => {
		const response = await request(app).get("/-5");
		expect(response.status).toBe(400);
		expect(response.body).toEqual(
			"Invalid input. Please provide a non-negative integer."
		);
	});

	test("GET /abc should return a 400 error", async () => {
		const response = await request(app).get("/abc");
		expect(response.status).toBe(400);
		expect(response.body).toEqual(
			"Invalid input. Please provide a non-negative integer."
		);
	});
});
