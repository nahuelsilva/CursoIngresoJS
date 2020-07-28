/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var i;

	i = 10

	while(i > 0)
	{
		document.write(i + "<br>");
		
		i = i - 1;

	//document.write(i + "<br>"); --- si lo pongo despues del i = i - 1; primero va a hacer la resta y luego va a mostrar
	}

}//FIN DE LA FUNCIÓN