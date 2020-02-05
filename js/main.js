	// Cложение всех чисел из массива
	const array1 = ['4', '3', '7', '10', '1'];

	const sumNumbersArray1= array1
		.map((el) => parseInt(el))
		.reduce((total, value) => total + value)
	
		console.log(sumNumbersArray1);

	
	
	