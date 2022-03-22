const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	let mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);


	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	let result = 0;
	if (mathSymbol === '+') {
		result = num1 + num2;
	} else if (mathSymbol === '-') {
		result = Math.abs(num1 - num2);
	} else if (mathSymbol === '*') {
		result = num1 * num2;
	} else if (mathSymbol === '/') {
		result = num1 / num2;
	} else if (mathSymbol === 'sqrt') {
		result = Math.sqrt(num1, num2);
	} else {
		console.log("Invalid symbol")
	}
	console.log(result);

	// This line closes the connection to the command line interface.
	reader.close()

});
