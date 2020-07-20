function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años)*/
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);


	if(edad < 13)
	{
		alert("Es menor de edad");
	}
	else
	{
		if (edad > 12 && edad < 18)
		{
			alert("Es adolescente");
		
		}
		else
		{
			alert("mayor de edad")
		}
		
	}

	//tomo la edad  
	//alert("ok");



}//FIN DE LA FUNCIÓN