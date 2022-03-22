const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ", function(input){
	tokens = input.split(' ');
	
	let mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);


	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	let result = 0;
	const condition = mathSymbol === '+' || mathSymbol === '-' || mathSymbol === '*' || mathSymbol === '/'; 
	if (condition) {
		
		for (let i = 1; i < tokens.length; i++) {
			const element = Number(tokens[i]);
			if (mathSymbol === '+') {
			
				result += element;
			} else if (mathSymbol === '-') {
				
				result -= element;
			} else if (mathSymbol === '*') {
				if (result === 0) {
					result = 1;
				}
				result = result * element;
			} else if (mathSymbol === '/') {
				if (result === 0) {
					result = 1;
				}
				result = result / element;
			}
		}
	} else if (!condition) {
		if (mathSymbol === 'sqrt') {
		
			result = Math.sqrt(num1);
		} else if (mathSymbol === '^3') {
			
			result = Math.pow(num1, 3);
		} else if (mathSymbol === '^') {
			
			result = Math.pow(num1, num2);
		} else if (mathSymbol === '%') {
			
			result = num1 % num2;
		} else if (mathSymbol === '^2') {
	
			result = num1 ** 2;
		}
		else {
			result = "Invalid symbol";
			// console.log("Invalid symbol")
		}
	}


	console.log(result);

	// This line closes the connection to the command line interface.
	reader.close()

});
