require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
	throw new Error("PORT is not defined");
}

app.use(cors());

const calculateMagicMath = (n) => {
	// Magic Math formula
	// magic_math(n) = magic_math(n-2) + magic_math(n-1) + n

	if (n === 0) return 0;
	if (n === 1) return 1;

	// Initialize variables
	// prev2 = magic_math(0)
	// prev1 = magic_math(1)
	let prev2 = 0,
		prev1 = 1,
		result = 0;

	for (let i = 2; i <= n; i++) {
		result = prev2 + prev1 + i;
		prev2 = prev1;
		prev1 = result;
	}
	return result;
};

app.get("/", (req, res) => {
	res.send("Welcome to Magic Math API");
});

app.get("/api/:n", (req, res) => {
	const n = parseInt(req.params.n, 10);

	if (isNaN(n) || n < 0) {
		return res
			.status(400)
			.json("Invalid input. Please provide a non-negative integer.");
	}

	try {
		const result = calculateMagicMath(n);
		res.json({ result });
	} catch (error) {
		res.status(500).json("Error calculating Magic Math");
	}
});

if (process.env.NODE_ENV !== "test") {
	app.listen(PORT, () => {
		console.log(`Magic Math API is running on http://127.0.0.1:${PORT}`);
	});
}

module.exports = app;
