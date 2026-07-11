function operar(a, b, callback) {
    return callback(a, b);
}

function resta(x, y) {
    x - y; 
}

let resultado = operar(15, 5, resta);/* de string a number */ 

console.log("El resultado de la operación es:", resultado);
// 'El resultado de la operación es:' 10