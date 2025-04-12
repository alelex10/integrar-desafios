// Datos de entrada (para pruebas)
const loanAmount = 1000;
const annualInterestRate = 12; // 12%
const termInMonths = 13;
const clientType = "returning";

// Implementa las funciones necesarias
function validations(amount, rate, term, type) {
	if (amount < 1000 || amount > 50000) {
		console.error("El monto del préstamo debe estar entre 1000 y 50000.");
		console.log(`Monto ingresado: ${amount}`);
		return false;
	} else if (rate < 5 || rate > 20) {
		console.error("La tasa de interés anual debe estar entre 5% y 20%.");
		console.log(`Tasa ingresada: ${rate}`);
		return false;
	} else if (term < 6 || term > 60) {
		console.error("El plazo del préstamo debe estar entre 6 y 60 meses.");
		console.log(`Plazo ingresado: ${term}`);
		return false;
	} else if (type !== "new") {
		if (type !== "premium") {
			if (type !== "returning") {
				console.error("El tipo de cliente debe ser 'new', 'premium' o 'returning'.");
				console.log(`Tipo ingresado : ${type}`);
				return false;
			}
		}
		return true;
	}
	return true;
}
function calculateMonthlyPayment(amount, rate, term) {
	if (term / 12 >= 1) {
		const monthlyPayment = (amount / term) * ((100 + rate) / 100);
		return monthlyPayment;
	} else {
		const monthlyPayment = amount / term;
		return monthlyPayment;
	}
}
function calculateTotalPayment(monthlyPayment, term) {
	const totalPayment = monthlyPayment * term;
	return totalPayment;
}
function calculateTotalInterest(totalPayment, loanAmount) {
	const totalInterest = totalPayment - loanAmount;
	return totalInterest;
}

function applyDiscount(monthlyPayment, clientType) {
	if (clientType === "new") {
		return monthlyPayment;
	} else if (clientType === "returning") {
		const discount = monthlyPayment * 0.02;
		return monthlyPayment - discount;
	} else if (clientType === "premium") {
		const discount = monthlyPayment * 0.05;
		return monthlyPayment - discount;
	}
}
// Función principal
function calculateLoan(amount, rate, term, type) {
	let monthlyPayment = 0;
	let monthlyPaymentWithDiscount = 0;
	let totalPayment = 0;
	let totalInterest = 0;
	//* Implementa las validaciones aquí
	const isValid = validations(amount, rate, term, type);
	//* Calcula la cuota mensual, total a pagar e intereses
	if (isValid) {
		monthlyPayment = calculateMonthlyPayment(amount, rate, term);
		totalPayment = calculateTotalPayment(monthlyPayment, term);
		totalInterest = calculateTotalInterest(totalPayment, amount);
		//* Aplica el descuento según tipo de cliente
		monthlyPaymentWithDiscount = applyDiscount(monthlyPayment, type);
		totalPayment = calculateTotalPayment(monthlyPaymentWithDiscount, term);
	}

	//* Retorna los resultados
	return {
		monthlyPayment,
		monthlyPaymentWithDiscount,
		totalPayment,
		totalInterest,
	};
}

// Ejecuta el programa y muestra resultados
const result = calculateLoan(loanAmount, annualInterestRate, termInMonths, clientType);

console.log(`Cuota mensual con descuento: ${result.monthlyPayment}`);
console.log(`Cuota mensual sin descuento: ${result.monthlyPaymentWithDiscount}`);
console.log(`Total a pagar: ${result.totalPayment}`);
console.log(`Interés total: ${result.totalInterest}`);


