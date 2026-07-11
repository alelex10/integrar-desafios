import { describe, expect, test } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
	test("given a number divisible by 3, should return Fizz", () => {
		const result = fizzbuzz(3);
		expect(result).toBe("Fizz");
	});
    test("given a number divisible by 5, should return Buzz", () => {
        const result = fizzbuzz(5);
        expect(result).toBe("Buzz");
    });
    test("given a number divisible by 3 AND 5, should return FizzBuzz", () => {
        const result = fizzbuzz(15);
        expect(result).toBe("FizzBuzz");
    });
    test("given a number not divisible by 3 or 5, should return the number", () => {
        const result = fizzbuzz(4);
        expect(result).toBe(4);
    });
});

