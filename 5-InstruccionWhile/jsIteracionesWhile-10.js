/*

NAHUEL SILVA

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var contadorNegativos;
	var acumuladorNegativos;
	var contadorPositivos;
	var acumuladorPositivos;
	var contadorCeros;
	var contadorNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	contadorNegativos = 0;
	acumuladorNegativos = 0;

	contadorPositivos = 0;
	acumuladorPositivos = 0;

	contadorCeros = 0;

	contadorNumerosPares = 0;

	respuesta="si";

	while(respuesta=="si")
	{

		numeroIngresado = prompt("Ingrese sus numeros: ");
		numeroIngresado = parseInt(numeroIngresado);


		if(numeroIngresado < 0)
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
			contadorNegativos++;
		}
		else
		{
			if(numeroIngresado > 0)
			{
				acumuladorPositivos = acumuladorPositivos + numeroIngresado;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}

		if(numeroIngresado % 2 == 0 && numeroIngresado != 0)
		{
			contadorNumerosPares++;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioPositivos = acumuladorPositivos / contadorPositivos;

	promedioNegativos = acumuladorNegativos / contadorNegativos;

	diferencia = acumuladorPositivos - acumuladorNegativos;


	document.write("La suma de negativos es : " + acumuladorNegativos + "<br>");
	document.write("La suma de positivos es : " + acumuladorPositivos + "<br>");
	document.write("La cantidad de negativos es : " + contadorNegativos + "<br>");
	document.write("La cantidad de positivos es : " + contadorPositivos + "<br>");
	document.write("La cantidad de ceros es : " + contadorCeros + "<br>");
	document.write("La cantidad de numeros pares es : " + contadorNumerosPares + "<br>");
	document.write("El promedio de los positivos es : " + promedioPositivos + "<br>");
	document.write("El promedio de los negativos es : " + promedioNegativos + "<br>");
	document.write("La diferencia entre positivos y negativos es : " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN