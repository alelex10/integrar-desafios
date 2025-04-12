/* //! ---------------------- Malas practicas ----------------------
var items = [10, 20, 30]; 
var tax = 0.05;
var discount = 0.1;

function CalculateTotal(items, tax, discount) {
	var VALOR_TOTAL = 0;

	for (var i = 0; i < items.length; i++) {
		VALOR_TOTAL += items[i];
	}
	VALOR_TOTAL += VALOR_TOTAL * tax;
	if (discount) {
		VALOR_TOTAL -= VALOR_TOTAL * discount;
	}
	return VALOR_TOTAL.toFixed(2);
}

var ElprOFeEstuvo_aQui = CalculateTotal(items, tax, discount);
console.log("Total: " + ElprOFeEstuvo_aQui); */
//! ---------------------- Buenas practicas ----------------------
//* de varnum1let o const
//* usar SCREAMING_SNAKE_CASE para constantes
//* nombre de array descriptivo
let numbers = [10, 20, 30];
let TAX = 0.05;
let DISCOUNT = 0.1;

//* descomponer funcion en tareas pequeñas y reutilizables
//* usar un solo parámetro como objeto.
function CalculateTotal({ numbers: numbers, tax, discount }) {
	//* let por que su valor cambia
	//* usar camelCase para variables y funciones
	let valorTotal = 0;

	//* let i en lugar de var
	for (let i = 0; i < numbers.length; i++) {
		valorTotal += numbers[i];
	}

	valorTotal += valorTotal * tax;
	//* usar el operador de cortocircuito para evitar if innecesarios
	valorTotal -= discount && valorTotal * discount;

	return valorTotal.toFixed(2);
}
//* nombre de variable descriptivo
let result = CalculateTotal({
	numbers: numbers,
	tax: TAX,
	discount: DISCOUNT,
});

console.log("Total: " + result);
//!----------------------- Calculadora -----------------------
//* Diccionario - Map
//* Realiza la implementación de una calculadora básica con JavaScript. Para ello crea las funciones de sumar, restar, multiplicar y dividir. Utiliza un diccionario o un map para organizar el código y respeta las prácticas vistas en esta clase.

const calculadoraBasica = (num1, num2, operation) => {
	return (
		{
			sumar: (num1, num2) => num1 + num2,
			restar: (num1, num2) => num1 - num2,
			multiplicar: (num1, num2) => num1 * num2,
			dividir: (num1, num2) => num1 / num2,
		}[operation](num1, num2) || "Operación no válida"
	);
};
console.log("suma:" + calculadoraBasica(10, 5, "sumar"));
console.log("resta:" + calculadoraBasica(10, 5, "restar"));
console.log("multiplicar:" + calculadoraBasica(10, 5, "multiplicar"));
console.log("dividir:" + calculadoraBasica(10, 5, "dividir"));
