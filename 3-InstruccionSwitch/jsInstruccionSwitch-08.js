function mostrar()
/*
	NAHUEL SILVA
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
{
	var destino;

	destino = txtIdDestino.value;

	switch(destino)
	{
		case "Bariloche" :
		case "Ushuaia" :
			alert("Frio");
			break;
	
	// USAR DEFAULT PARA CUALQUIERA DE LA CASOS SINO ES UNO O OTRO 		
		case "Mar del plata" :
		case "Cataratas" :
			alert("Calor");
			break;		
	}

}//FIN DE LA FUNCIÓN