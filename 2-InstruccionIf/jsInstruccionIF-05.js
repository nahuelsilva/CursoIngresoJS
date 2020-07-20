function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	
	edad = parseInt(edad);

	
	if(edad < 13 || edad > 17)
	{
		alert("No es adolescente");
	}

	//alert("fuera el if");
	
	/*

	------- DE ESTA FORMA SALE EL || esto es el O sucede o una cosa o la otra ------ 

	if(edad < 13)
	{
		alert("no es adolescente");

	}
	if( edad > 17)
	{
		alert("no es adolescente");
	}
	
	*/
	
}//FIN DE LA FUNCIÓN