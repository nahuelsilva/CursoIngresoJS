/*

	NAHUEL SILVA
	
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroingresado;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroingresado = prompt("ingrese numero: ");
		numeroingresado = parseInt(numeroingresado);
		
		if(numeroingresado > 0 )
		{
			sumaPositivos = sumaPositivos + numeroingresado;

		}
		else 
		{
			
			multiplicacionNegativos = multiplicacionNegativos * numeroingresado;
		}
		
		respuesta = prompt("Quiere seguir ingresando numeros?: ");
	}

	if(multiplicacionNegativos == 1)
	{
		multiplicacionNegativos = "No hay negativos";
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN