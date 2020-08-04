/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{

	var sexo;
	sexo = prompt("Ingrese f o m segun su sexo.");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Error.. Ingrese sexo correctamente: ");
	}

	txtIdSexo.value = sexo;
}//FIN DE LA FUNCIÓN