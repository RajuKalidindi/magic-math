import { describe, expect, beforeEach, test } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MagicMath from "./MagicMath";

describe("MagicMath", () => {
	beforeEach(() => {
		render(<MagicMath />);
	});

	test("renders correctly with initial state", () => {
		expect(screen.getByText("Magic Math Calculator")).toBeInTheDocument();
		expect(
			screen.getByLabelText("Enter a non-negative integer")
		).toBeInTheDocument();
		expect(screen.getByText("Calculate")).toBeInTheDocument();
		expect(
			screen.getByText(/Magic Math is defined as:/)
		).toBeInTheDocument();
	});

	test("calculates magic math correctly for positive numbers", async () => {
		const input = screen.getByLabelText("Enter a non-negative integer");
		const button = screen.getByText("Calculate");

		fireEvent.change(input, { target: { value: "10" } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(screen.getByText("364")).toBeInTheDocument();
		});
	});

	test("Returns an error for negative number", async () => {
		const input = screen.getByLabelText(/Enter a non-negative integer/i);
		const button = screen.getByText(/Calculate/i);

		fireEvent.change(input, { target: { value: "-10" } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(
				screen.getByText("Please enter a non-negative number")
			).toBeInTheDocument();
		});
	});

	test("Returns an error for string", async () => {
		const input = screen.getByLabelText(/Enter a non-negative integer/i);
		const button = screen.getByText(/Calculate/i);

		fireEvent.change(input, { target: { value: "abc" } });
		fireEvent.click(button);

		await waitFor(() => {
			expect(
				screen.getByText("Please enter a non-negative number")
			).toBeInTheDocument();
		});
	});
});
