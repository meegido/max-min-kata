
function min_element (sequence) {
	var minNumber = Number.MAX_VALUE;

	for (i = 0; i < sequence.length; i++){
		var currentNumber = sequence[i];

		if(currentNumber < minNumber){
			minNumber = currentNumber;
		}
	}

	return minNumber;

}

function max_element (sequence) {
	var maxNumber = Number.MIN_VALUE;

	for (i = 0; i < sequence.length; i++){
		var currentNumber = sequence[i];

		if(currentNumber > maxNumber){
			maxNumber = currentNumber;
		}
	}

	return maxNumber;
}



console.log(min_element([12,4,99,7]));
console.log(max_element([12,4,99,7]));




/*Escribir el par de funciones

min_element(S) y
max_element(S)

La primera debe obtener el mínimo de una secuencia de elementos.
La segunda debe obtener el máximo de una secuencia de elementos.

Ejemplo:
min_element([12,4,99,7]) debe devolver 4
max_element([12,4,99,7]) debe devolver 99
*/
