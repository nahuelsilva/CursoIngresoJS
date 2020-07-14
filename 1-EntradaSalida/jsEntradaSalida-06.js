/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var n1;
	var n2;
	var suma;

	var n1 = parseInt (document.getElementById('txtIdNumeroUno').value);
	var n2 = parseInt (txtIdNumeroDos.value);

	suma = n1 + n2;

	
	alert(suma);
}

