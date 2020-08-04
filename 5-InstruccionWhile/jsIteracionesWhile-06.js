function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	//numeroIngresado = prompt("ingrese sus numeros: ");
	//numeroIngresado = parseInt(numeroIngresado);
	
	while(contador < 5)
	{

		numeroIngresado = prompt("Ingrese sus numeros");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN