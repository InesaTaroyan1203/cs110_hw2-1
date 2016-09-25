function factorial(n) {
	if (n === 0) {
		return 1;
	} else if (n < 0){
		throw new Error("Factorial Must be bigger or equale than 0");
	}

	return n * factorial(n - 1); 
};
console.log(factorial(5));