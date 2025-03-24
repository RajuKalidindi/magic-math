import { useState } from "react";

const MagicMath = () => {
	const [number, setNumber] = useState("");
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const API_URL = import.meta.env.VITE_API_URL;

	if (!API_URL) {
		throw new Error("API_URL is not defined");
	}

	const calculateMagicMath = async () => {
		setResult(null);
		if (!number || number < 0) {
			setError("Please enter a non-negative number");
			return;
		}
		setLoading(true);
		setError("");
		try {
			const response = await fetch(API_URL + `/${number}`);
			if (!response.ok) {
				throw new Error("Failed to fetch result");
			}
			const data = await response.json();
			setResult(data.result);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
			<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-100">
				<h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
					Magic Math Calculator
				</h1>

				<div className="space-y-4">
					<div>
						<label
							htmlFor="numberInput"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Enter a non-negative integer
						</label>
						<input
							id="numberInput"
							type="number"
							className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500"
							placeholder="Ex: 5"
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</div>

					<button
						onClick={calculateMagicMath}
						className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium"
						disabled={loading}
					>
						{loading ? "Calculating..." : "Calculate"}
					</button>

					{error && (
						<div className="p-3 bg-red-50 border border-red-200 rounded-lg">
							<p className="text-red-600 text-sm">{error}</p>
						</div>
					)}

					{result !== null && (
						<div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex flex-col items-center">
							<span className="text-xs font-semibold uppercase text-green-600 mb-1">
								Result
							</span>
							<div className="text-2xl font-bold text-green-700">
								{result}
							</div>
						</div>
					)}
				</div>

				<div className="mt-8 pt-6 border-t border-gray-200">
					<p className="text-xs text-gray-500 text-center font-mono">
						Magic Math is defined as:
						<br />
						magic_math(N) = magic_math(N-1) + magic_math(N-2) + N
					</p>
				</div>
			</div>
		</div>
	);
};

export default MagicMath;
