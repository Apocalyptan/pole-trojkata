	var a = prompt("Wpisz podstawę trójkąta: ");
		h = prompt("Wpisz wysokość trójkąta: ");
		mnozOne = prompt("Cyfra do mnożenia I: ");
		mnozTwo = prompt("Cyfra do mnożenia II: ");
		triangleArea = a*h/2;
		mnozWynik = mnozOne*mnozTwo;

	console.log("Pole trójkąta o podstawie a: " + a + " i wysokości h: " + h + " wynosi: " + triangleArea + "!");
	console.log("Wynik mnożenia to: " + mnozWynik);
	alert("Pole trójkąta o podstawie a: " + a + " i wysokości h: " + h + " wynosi: " + triangleArea + ", a wynik mnożenia wynosi: " + mnozWynik);