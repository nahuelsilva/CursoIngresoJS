/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precioSindescuento;
    var marca;
    var lamparasMayoresSeis;
    var lamparaArgentinaLuz;
    var felipeLamparas;
    var otras;
    var descuento;
    var precioConDescuento;
    var aumentoIva;
    var importeConIva;
    
    // agrege una ultima variable para poder sacar el importe final si es mayor a 120 -- var preciocondescuento

    cantidadLamparas = txtIdCantidad.value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioSindescuento = cantidadLamparas * 35;
    precioSindescuento = parseInt(precioSindescuento);

    marca = Marca.value;

    if(cantidadLamparas > 5 )
    {
        precioConDescuento = precioSindescuento / 2;
        lamparasMayoresSeis = precioConDescuento
        // -- esto es para tirar un mensaje por ALERT --- alert("El descuento es: " + lamparasMayoresSeis);
        txtIdprecioDescuento.value = lamparasMayoresSeis;
    }
    else{
            if(cantidadLamparas == 5 && marca == "ArgentinaLuz")
            {
                descuento = (precioSindescuento * 40) / 100;
                precioConDescuento = precioSindescuento - descuento;
                lamparaArgentinaLuz = precioConDescuento;

                //alert("lampara argentina luz 40 %: " + lamparaArgentinaLuz);
                txtIdprecioDescuento.value = lamparaArgentinaLuz;
            }
            else
            {
                if(cantidadLamparas == 5)
                {
                    descuento = (precioSindescuento * 30) / 100;
                    precioConDescuento = precioSindescuento - descuento;
                    otras = precioConDescuento;

                    //alert("comprando 5 cualquier marca 30 % desc:" + otras);
                    txtIdprecioDescuento.value = otras;
                }
                else
                {
                    if(cantidadLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
                    {
                        descuento = (precioSindescuento * 25) / 100;
                        precioConDescuento = precioSindescuento - descuento;

                        //alert("4 lamparas argentinaluz 25 % desc: " + lamparaArgentinaLuz);
                        txtIdprecioDescuento.value = precioConDescuento;
                    }
                    else
                    {
                        if(cantidadLamparas == 4 )
                        {
                            descuento = (precioSindescuento * 20) / 100;
                            precioConDescuento = precioSindescuento - descuento;
                            otras = precioConDescuento;

                            // alert(" 4 lamparas otra marca 20 % desc : " + felipeLamparas);
                            txtIdprecioDescuento.value = otras;
                        }
                        else
                        {
                            if(cantidadLamparas == 3 && marca == "ArgentinaLuz")
                            {
                                descuento = (precioSindescuento * 15) / 100;
                                precioConDescuento = precioSindescuento - descuento;
                                lamparaArgentinaLuz = precioConDescuento;

                                //alert(" 3 lampas argentinaluz 15 % desc: " + lamparaArgentinaLuz);
                                txtIdprecioDescuento.value = lamparaArgentinaLuz;
                            }
                            else
                            {
                                if(cantidadLamparas == 3 && marca == "FelipeLamparas")
                                {
                                    descuento = (precioSindescuento * 10) / 100;
                                    precioConDescuento = precioSindescuento - descuento;
                                    felipeLamparas = precioConDescuento;

                                    //alert("3 felipe lampara 10 % desc: " + felipeLamparas);
                                    txtIdprecioDescuento.value = felipeLamparas;
                                }
                                else
                                {
                                    if(cantidadLamparas == 3)
                                    {
                                        descuento = (precioSindescuento * 5) / 100;
                                        precioConDescuento = precioSindescuento - descuento;
                                        otras = precioConDescuento;
                                        // alert (" 3 lamparas cualquiera un 5 % desc: " + otras);
                                        txtIdprecioDescuento.value = otras;
                                    }
                                    else
                                    {
                                        otras = precioSindescuento;
                                        txtIdprecioDescuento.value = otras;
                                    }
                                }
                            }
                        }
                     
                    }
                }
            }
        }
        if(precioConDescuento > 120)
        {
            aumentoIva = (precioConDescuento * 10) / 100;
            importeConIva = precioConDescuento + aumentoIva;
            alert("El precio supero los 120 se agrega un iva del 10%: " + importeConIva);
        }

}

 /*
                    else
                    {
                        if(cantidadLamparas == 3 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
                        {
                            descuento = (marca == "ArgentinaLuz") = (precioSindescuento * 15) / 100;
                            lamparaArgentinaLuz = precioSindescuento - descuento;

                            alert(" 3 argentina luz 15 % desc: " + lamparaArgentinaLuz);

                            descuento = (marca == "FelipeLamparas") = (precioSindescuento * 10) / 100;
                            felipeLamparas = precioSindescuento - descuento;

                            alert("3 felipe lamparas 10% desc:" + felipeLamparas);
                        }
                    }
                        
     // --- De esta forma rompe el programa --- if(cantidadLamparas == 3 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))

    ---  Para reducir variables se puede reemplazar estas variables:

     var lamparasMayoresSeis;
     var lamparaArgentinaLuz;
     var felipeLamparas;
     var otras;

     y cambiarlas por solamente : var precioSindescuento;
                                  var descuento;
                                  var precioConDescuento;

                esto toma cada resultado y lo va chequeando if por if, en donde entro (algun if) toma el valor y luego salta
                porque el valor ya esta usando esa variable.  

*/

/*
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

/*
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}


 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted p/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

----- HECHO POR OCTAVIO ----

 */


 /*
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var marcaLamparas;
 	var precioBruto;
 	
 	var descuentoCalculado;
 	var porcentaje;
 	var precioFinal;
 	var aumentoIIBB;


 	
 	cantidadLamparas=txtIdCantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);

 	marcaLamparas=Marca.value;
 	//testing
 	//console.log(marcaLamparas+" "+cantidadLamparas);
	precioBruto=cantidadLamparas*35;

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
					break;
				case "FelipeLamparas":
					porcentaje=10;
					break;
				default:
					porcentaje=5;
					break;
						
			}
			break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
					break;
				default:
					porcentaje=20;
					break;
			}
			break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
					break;
				default:
					porcentaje=30;
					break;
			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}






	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
			break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
				porcentaje=10;	
				}else
				{
					porcentaje=5;	
				}
			}
			break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
			{
	 			porcentaje=25;
			}else
			{
	 			porcentaje=20;
			}

			break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 			break;
 		default:
 			porcentaje=50;
 			break;
	}


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else if(cantidadLamparas==5 )
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
 		porcentaje=40;
		}else
		{
 		porcentaje=30;
		}
	}
	else if(cantidadLamparas==4)
	{
		if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
		{
 		porcentaje=25;
		}else
		{
 		porcentaje=20;
		}
	}else if(cantidadLamparas==3)
	{
		if(marcaLamparas=="ArgentinaLuz")
		{
			porcentaje=15;
		}else if(marcaLamparas=="FelipeLamparas")
		{
		porcentaje=10;	
		}else
		{
			porcentaje=5;	
		}
		
	}
	
	
 	


	porcentaje=0;
 	if(cantidadLamparas>5)
 	{
 		porcentaje=50;
 	}else
 	{
 		if(cantidadLamparas==5 )
 		{
 			if(marcaLamparas=="ArgentinaLuz")
 			{
		 		porcentaje=40;
 			}else
 			{
		 		porcentaje=30;
 			}
 		}
 		else
 		{
 			if(cantidadLamparas==4)
 			{
 				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
 				{
			 		porcentaje=25;
 				}else
 				{
			 		porcentaje=20;
 				}
 			}else
 			{
 				if(cantidadLamparas==3)
 				{
 					if(marcaLamparas=="ArgentinaLuz")
 					{
 						porcentaje=15;
 					}else
 					{
 						if(marcaLamparas=="FelipeLamparas")
 						{
							porcentaje=10;	
 						}else
 						{
 							porcentaje=5;	
 						}
 					}
 				}
 			}
 		}
 	}


 	descuentoCalculado=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuentoCalculado;
	aumentoIIBB=0;
	if(precioFinal>120)
	{
		aumentoIIBB=precioFinal*10/100;
		alert("Usted pago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}
ago "+aumentoIIBB+" de IIBB.")
	}
 	txtIdprecioDescuento.value=precioFinal+aumentoIIBB;
}

*/
