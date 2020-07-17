function mostrar()
{
	var edad;

	//tomo la edad  

	edad = txtIdEdad.value;

	/*
	if(edad < 18){

		alert("Es menor de edad");

	}
	//alert("Es mayor de edad: " + edad + " años");
	*/

	if (edad < 18){

		alert("Es menor de edad: " + edad + " años");
	}

	if (edad >= 18){

		alert("Es mayor de edad: " + edad + " años");
	}

	/*
	if (edad < 18) {

		alert("Es menor de edad: " + edad + " años");
		
	} else {
		alert("Es mayor de edad: " + edad + " años");
		
	}   ----OPCION CORRECTA DE COMO USAR EL IF APLICANDO IF ELSE----
	*/

}//FIN DE LA FUNCIÓN