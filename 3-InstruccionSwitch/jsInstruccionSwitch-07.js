function mostrar()
/*
	NAHUEL SILVA
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
{
	var destino;
	
	destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche" :
			alert("Punto cardinal: Este")
			break;

		case "Cataratas" :
			alert("Punto cardinal: Norte");
			break;

		case "Mar del plata" :
			alert("Punto cardinal: Oeste");
			break;
			
		case "Ushuaia" :
			alert("Punto cardinal: Sur");
			break;	
	}

}//FIN DE LA FUNCIÓN