/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var n1;
	var n2;
	var suma;

	/*
	n1 = parseInt(document.getElementById('txtIdNumeroUno').value);
	n2 = parseInt(document.getElementById('txtIdNumeroDos').value); 

	ES MEJOR HACER PASO POR PASO.
	*/

	n1 = document.getElementById('txtIdNumeroUno').value;
	n1 = parseInt(n1);

	n2 = document.getElementById('txtIdNumeroDos').value;
	n2 = parseInt(n2);

	suma = n1 + n2;

	alert("La suma es: " + suma);	
}

function restar()
{
	var n1;
	var n2;
	var resta;

	/*
	n1 = parseInt (txtIdNumeroUno.value);
	n2 = parseInt (txtIdNumeroDos.value);

	HAY Q HACER PASO A PASO.

	*/

	n1 = txtIdNumeroUno.value;
	n1 = parseInt(n1);

	n2 = txtIdNumeroDos.value;
	n2 = parseInt(n2);

	resta = n1 - n2;

	alert("La resta es: " + resta);
	
}

function multiplicar()
{ 
	var n1;
	var n2;
	var multiplicar;

	/*
	n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);

	ESTA BIEN PERO NO TAN BIEN :)
	*/

	n1 = txtIdNumeroUno.value;
	n1 = parseInt(n1);

	n2 = txtIdNumeroDos.value;
	n2 = parseInt(n2);

	multiplicar = n1 * n2;

	alert("La multiplicacion es: " + multiplicar);
}

function dividir()
{
	var n1;
	var n2;
	var dividir;

	/*
	n1 = parseInt(txtIdNumeroUno.value);
	n2 = parseInt(txtIdNumeroDos.value);
	*/

	n1 = txtIdNumeroUno.value;
	n1 = parseInt(n1);

	n2 = txtIdNumeroDos.value;
	n2 = parseInt(n2);

	dividir = n1 / n2;

	alert("La division es: " + dividir);	
}

