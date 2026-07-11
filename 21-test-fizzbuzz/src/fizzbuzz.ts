export function fizzbuzz(value: number) {
	const isDivisibleBy3 = value % 3 === 0;
	const isDivisibleBy5 = value % 5 === 0;

	if (isDivisibleBy3 && isDivisibleBy5) {
		return "FizzBuzz";
	}
	if (isDivisibleBy3) {
		return "Fizz";
	}
	if (isDivisibleBy5) {
		return "Buzz";
	}
	return value;
}

