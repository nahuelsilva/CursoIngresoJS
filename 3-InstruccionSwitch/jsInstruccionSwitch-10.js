function mostrar()
{
	/*
		una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
		informar si "Se viaja" o "No se viaja" a ese lugar

		en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

		en Verano: Se viaja a Mar del plata y Cataratas solamente

		en Otoño: Se viaja a todos los destinos.

		primavera: solo no se viaja a Bariloche

	*/
	var estacionDelAño;
	var destino;
	var mensaje;

	estacionDelAño = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacionDelAño)
	{
		case "Invierno" :
			switch(destino)
			{
				case "Bariloche" :
					mensaje = "Se viaja";
					break;
				
				default :
					mensaje = "No se viaja";
					break;	
			}
			break;

		case "Verano" :
			switch(destino)
			{
				case "Mar del plata" :
				case "Cataratas" :
					mensaje = "Se viaja";
					break;
					
				default :
					mensaje = "No se viaja";	
					break;
			}
			break;
			
		case "Primavera" : 
			switch(destino)
			{
				case "Bariloche" :
					mensaje = "No se viaja";
					break;

				default :
					mensaje = "Se viaja";
					break;	
			}
			break;
		
		default :
			mensaje = "Se viaja a todos los destinos";
			break;
					
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN