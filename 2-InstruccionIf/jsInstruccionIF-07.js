function mostrar()
{
	//tomo la edad 
	var edad;
	var estadocivilingresado;

	estadocivilingresado = estadoCivil.value;
	edad = txtIdEdad.value;

	edad = parseInt(edad);

	if(edad < 18 && estadocivilingresado != "Soltero")
	{
		alert("Es muy joven para no ser soltero");
	}
	//alert("ok");
	


}//FIN DE LA FUNCIÓN