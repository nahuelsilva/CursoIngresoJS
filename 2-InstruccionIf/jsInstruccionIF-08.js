function mostrar()
{

/*
Hacerlo en el ejercicio 08 del IF:

Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
*/

	var edad;
	var estadocivilingresado;
	var menoresDeEdad;
	var adolescentesCasados;
	var mensaje;
	var mensajeConcatenado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadocivilingresado = estadoCivil.value;



	if(edad > 5 && edad < 18)
	{
		switch(edad)
		{
			case 17:
			case 16:
			case 15:
			case 14:
			case 13:
				if(estadocivilingresado == "Casado" || estadocivilingresado == "Divorciado")
				{
					mensaje = "Sos muy joven para no ser soltero.";
				}
				break;
			
				default :
					/*
					no va:
					alert("haga la tarea");
					mensaje = alert("haga la tarea");
					*/
					mensaje = "Haga la tarea."				
				break

			mensajeConcatenado = "Respeta tus mayores.";	
		}
	}
	else
	{
		if(edad > 17 && edad < 100)
		{
			switch(estadocivilingresado)
			{
				case "Soltero":
					mensaje = alert("vive la vida");
					break;

				case "Casado":
					mensaje = alert("Disfruta tu pareja");
					break;

				case "Divorciado":		
					mensaje = alert("intentalo nuevamente");
					break;
					
			}
		}
		else
		{
			if()
		}
	}

	alert( mensaje);
///// debo poner una variable mensaje
	





/*	
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
	
*/

}//FIN DE LA FUNCIÓN