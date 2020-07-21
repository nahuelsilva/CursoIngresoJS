function mostrar()
{
	/*
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,

"	APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4
	*/
	var numeroaleatorio;
	
	numeroaleatorio = Math.floor((Math.random() * 10) + 1);

	/*
		 Para solo usar un ALERT, se asigna una variable llamada mensaje y se cambia en los 
		 alert correspondiente dentro de los IF.. EJ : MENSAJE = "EXELENTE".. y al final de todo se tira el alert
		 y dentro el mensaje.

	*/

	if(numeroaleatorio > 8 )
	{
		alert("Exelente: " + numeroaleatorio);
	}
	else 
	{	
		if(numeroaleatorio > 4)
		{
			alert("Aprobo: " + numeroaleatorio);

		}
		/*
		if(numeroaleatorio > 3 && numeroaleatorio < 9)
		{
			alert("Aprobo: " + numeroaleatorio);
		}
		*/
		else
		{
			alert("Siga participando: " + numeroaleatorio);
		}

	}

	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN