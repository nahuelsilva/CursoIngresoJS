function mostrar()
{
	var edad;
	var  estadocivilingresado;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadocivilingresado = estadoCivil.value;

	if(edad > 17 && estadocivilingresado == "Soltero")
	{
		alert("Es soltero y es mayor de edad");
	}
	//tomo la edad  
	//alert("ok");
	


}//FIN DE LA FUNCIÓN