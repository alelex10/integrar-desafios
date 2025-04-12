//* Haga una función que elimine el primer elemento del arreglo.
let array = [1, 2, 3, 4, 5];
function removeFirstElement(array) {
	return array.shift();
}

console.log(`
-------------- Ejercicio 1 --------------
El primer elemento eliminado es: ${removeFirstElement(array)}
El arreglo original es: ${array}
El nuevo arreglo es: ${array}`);

//* Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3. En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeLastThreeElements(array) {
	if (array.length > 5) {
		return array.splice(-3);
	} else {
		return "El arreglo debe tener más de 5 elementos.";
	}
}
console.log(`
-------------- Ejercicio 2 --------------
El arreglo original es: ${array2}
Los tres elementos eliminados son: ${removeLastThreeElements(array2)}
El nuevo arreglo es: ${array2}`);

//* Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y devolver el arreglo modificado.
let array3 = [1, 2, 3, 4, 5];
function addNumberToArray(array, number) {
	return array.map((element, index) => {
		return (array[index] = element + number);
	});
}
console.log(`
-------------- Ejercicio 3 --------------
El arreglo original es: ${array3}
El número a sumar es: ${3}
El nuevo arreglo es: ${addNumberToArray(array3, 3)}`);

//* Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.

//* El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)
let number = 5;
function createArray(number) {
	return Array.from({ length: number }, (_, index) => index + 1);
}
console.log(`
-------------- Ejercicio 4 --------------
El número ingresado es: ${number}
El nuevo arreglo es: ${createArray(number)}`);

//* Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.
//findUniq([1,1,1,1,1,2,1,1,1])  # return (2)
let array4 = [1, 1, 1, 1, 1, 1, 1, 3];
function findUniq(array) {
	return array.find((element, index) => element !== array[index + 1] && element !== array[index - 1]);
}

console.log(`
-------------- Ejercicio 5 --------------
El arreglo original es: ${array4}
El número distinto es: ${findUniq(array4)}`);

//* Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.

// minSum([7,4,2,3])  # return (5)

let array5 = [7, 4, 1, 1];
function minSum(array) {
	array5 = array.sort((a, b) => a - b);
	return array5[0] + array5[1];
}
console.log(`
-------------- Ejercicio 6 --------------
El arreglo original es: ${array5}
La menor suma es: ${minSum(array5)}`);

//* Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.

//adjacentElementsProduct([9,5,10,2,24,-1])  # return (50)
//# 5 * 10 = 50

let array6 = [9, 5, 10, 2, 24, -1];
function adjacentElementsProduct(array) {
	return array.reduce((acc, curr, index) => {
		const product = curr * array[index + 1];
		if (product > acc) {
			return product;
		}
		return acc;
	}, array[0] * array[1]);
}
console.log(`
-------------- Ejercicio 7 --------------
El arreglo original es: ${array6}
El mayor producto es: ${adjacentElementsProduct(array6)}`);

//* Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.

//* Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.

//* Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

//* warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
//* # "Hey! Oveja numero 1! El lobo esta cerca!"

//* warnTheSheep(["sheep", "sheep", "sheep", "wolf"])
//* # "No sigas comiendo ovejas!"

let array7 = ["sheep", "sheep", "sheep", "wolf"];
function warnTheSheep(array) {
	arrayReverse = array.reverse();
	wolfLast = arrayReverse[0];
	if (array.at(-1) === "wolf") {
		return "No sigas comiendo ovejas!";
	}
	const wolfIndex = array.indexOf("wolf");
	return `Hey! Oveja numero ${wolfIndex + 2}! El lobo esta cerca!`;
}

console.log(`
-------------- Ejercicio 8 --------------
El arreglo original es: ${array7}
El arreglo invertido es: ${array7.reverse()}
${warnTheSheep(array7)}
-----------------------------------------`);
