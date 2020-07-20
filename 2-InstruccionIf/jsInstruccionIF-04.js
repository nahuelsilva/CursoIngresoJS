function mostrar()
{

	var edad;


	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	
	
	if(edad > 12 && edad < 18)
	{

		alert("Es adolescente");

	}
	
	/*

	------ DE ESTA FORMA ES DE DONDE SALE EL && -------

	if(edad > 12)
	{
		if(edad < 18)
		{
			alert("Es adolescente");
		}

	}
	*/
	
}//FIN DE LA FUNCIÓN