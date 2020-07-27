function mostrar()
/*
	NAHUEL SILVA	
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.


*/
{
	var mes;

	mes = txtIdMes.value;

	switch (mes)
	{
		case "Abril" :
		case "Junio" :
		case "Septiembre" :
		case "Noviembre" :
			alert("Este mes tiene 30 dias");
			break;
		
		case "Febrero" :
			alert("Este mes trae 28 dias");
			break;
			
		default :
			alert("Estos mes trae 31 dias");
			break;	
	}
	
}//FIN DE LA FUNCIÓN