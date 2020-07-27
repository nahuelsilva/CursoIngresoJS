function mostrar()
/*

una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
{
	var estacionDelAño;
	var destino;
	var precioInvierno;
	var precioVerano;
	var precioOtraEstacion;
	var precioFinal;
	var tarifa = 15000;
	var porcentaje;
	var aumento;
	var descuento;
	var precioDescuento;
	var precioAumento;

	estacionDelAño = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch (estacionDelAño)
	{
		case "Invierno" : 
			if(destino == "Bariloche")
			{
				aumento = 20;
				/*
				precioInvierno = tarifa * porcentaje / 100;
				precioFinal = tarifa + precioInvierno;
				alert("Epocas de invierno " + precioFinal);
				*/

				// ver como hacer para poner las operaciones afuera
			}
			else
			{
				if(estacionDelAño == "Mar del plata")
				{
					descuento = 20;
				}
				else 
				{
					descuento = 10;
				}
				/*
				precioInvierno = tarifa * porcentaje / 100;
				precioFinal = tarifa - precioInvierno;
				alert("Epocas de invierno " + precioFinal);
				*/
			}

		case "Verano" :
			switch (destino)
			{
				case "Cataratas" :
				case "Cordoba"	:
					aumento = 10;
					break;
				
				case "Mar del plata" :
					aumento = 20;
					break;
					
				case "Bariloche" :
					descuento = 20;
					break;	
			}

		case "Otoño" :
		case "Primavera" :
			switch (destino)
			{
				case "Bariloche" :
				case "Cataratas" :
				case "Mar del plata" :
					aumento = 10;
					break
					
				default :
					aumento = 0;
					break;	
			}	
	}

	// ver como hacer para resolver el tema de los precios 

	precioAumento = tarifa * aumento / 100;
	precioDescuento = tarifa * descuento / 100;

	precioFinal = tarifa - precioDescuento;
	precioFinal = tarifa + precioAumento;

	alert("el precio : " + precioFinal );


}//FIN DE LA FUNCIÓN