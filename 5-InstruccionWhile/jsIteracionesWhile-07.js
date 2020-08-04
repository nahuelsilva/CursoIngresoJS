/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroingresado;
	contador=0;
	acumulador = 0;
	respuesta = true;
	//respuesta='si';

	while(respuesta == true)
	{

		numeroingresado = prompt("Ingrese sus numeros: ");
		numeroingresado = parseInt(numeroingresado);

		acumulador = acumulador + numeroingresado;

		contador = contador + 1;
		// contador++;


		respuesta = confirm("otro numero: ");
		//respuesta = prompt("Desea seguir incorporando numeros: ");

	}
	// tarea para la clase: tolowercase
	//						touppercase

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN