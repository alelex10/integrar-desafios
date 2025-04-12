//* Hacer un timer que muestre en pantalla una cuenta del 1 al 10 mediante el uso de un bucle for. Una vez realizado el timer, verificar que es lo que sucede si en lugar de utilizar let para declarar el iterador del bucle, se usa var. Intentar corregir dicho comportamiento, considerando que parte es sincrónica del código y cual asincrónica.

const timerLet = () => {
	for (let i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, i * 1000);
		console.log(i);
	}
};
//* el for es sincrónico, y el setTimeout es asincrónico, por lo que el for se ejecuta primero y luego se ejecuta el setTimeout. Por eso se ve el 10 al final.
const timerVar = async () => {
	for (i = 1; i <= 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, i * 1000);
		console.log(i);
	}
};
//* Para integrar setTimeout con async/await, lo envolvemos dentro de una promesa. La promesa se resuelve una vez que el setTimeout ha completado su ejecución. Esto permite que await pause la ejecución hasta que el temporizador haya terminado.
const timerSolution = async () => {
	for (let i = 1; i <= 10; i++) {
		//Devuelve una promesa que se resuelve después de un segundo.
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(i);
	}
};
console.log("Timer con Solucion:");
timerSolution();
