/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{


/*
	NAHUEL SILVA

Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

*/

/*
	var edad;
	var nombre;
	var sexo;
	var respuesta;
	var mayores;
	var menores;
	var adolescentes;
	var viejo;
	var joven;
	var flag;
	var contador;

	mayores = 0;
	menores = 0;
	adolescentes = 0;

	flag = 1;

	contador = 0;

	respuesta = "si";

while(respuesta == "si")
{

	edad = prompt("Ingrese edad: ");
	edad = parseInt(edad);

	while(edad < 0 || edad > 120 )
	{
		edad = prompt("Error ingrese nuevamente edad: ")
		edad = parseInt(edad);
	}

	nombre = prompt("Ingrese nombre: ")

	sexo = prompt("ingrese el sexo f o m : ");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Error. intenta de nuevo: ");
	}

	if(edad > 13 && edad < 18)
	{
		adolescentes++;
	}
	else
	{
		if(edad > 17)
		{
			mayores++;
		}
		else
		{
			menores++;
		}
	}

	if(flag == 1 || edad > viejo)
	{
		viejo = edad;
	}
	if(flag == 1 || edad < joven)
	{
		joven = edad;
	}

	flag = 0;


	contador++;
	respuesta = prompt("desea seguir introduciendo datos: ")
}

	document.write("En total son: " + contador + "</br>");
	document.write("Mayores de edad: " + mayores + "</br>");
	document.write("Menores de edad: " + menores + "</br>");
	document.write("Adolescentes : " + adolescentes + "</br>");
	document.write("Edad mas vieja : " + viejo + "</br>");
	document.write("Edad mas joven : " + joven + "</br>");

	//alert("Esto funciona de maravilla");

	*/

    ////////////////////////////////////////////////////////////////////

/*
	NAHUEL SILVA

	nivel:2

	cuantas mujeres;
	cuantos hombres;
	cuantas adolescentes mujeres 
	cuantos niños hombres 
	el promedio de edad
	el promedio de edad de las mujeres
	el promedio de edad de los hombres
	la cantidad de edades pares 
*/

/*
	var edad;
	var sexo;
	var contadorMujeres;
	var acumuladorMujeres;
	var contadorHombres;
	var acumuladorHombres;
	var contadorAdolescentesMujeres;
	var contadorNiños;
	var respuesta;
	var contadorEdad;
	var acumuladorEdad;
	var promedioEdadTotal;
	var promedioMujeres;
	var promedioHombres;
	var contadorEdadesPares;

	contadorHombres = 0;
	acumuladorHombres = 0;


	contadorMujeres = 0;
	acumuladorMujeres = 0;

	contadorNiños = 0;
	contadorAdolescentesMujeres = 0;

	contadorEdad = 0;
	acumuladorEdad = 0;

	contadorEdadesPares = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);

		while(edad < 1 || isNaN(edad))
		{
			edad = prompt("Ingrese edad correctamente: ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese sexo f o m: ");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("No es correcto. Ingrese sexo: ");
		}		

		if(sexo == "f")
		{
			contadorMujeres++;
			acumuladorMujeres = acumuladorMujeres + edad;

			if(edad > 12 && edad < 18)
			{
				contadorAdolescentesMujeres ++;
			}
		}
		else
		{
			if(sexo == "m")
			{
				contadorHombres++;
				acumuladorHombres = acumuladorHombres + edad;

				if(edad < 13)
				{
					contadorNiños++;
				}
			}
		}

		if(edad % 2 == 0)
		{
			contadorEdadesPares++;
		}

		acumuladorEdad = acumuladorEdad + edad;
		contadorEdad++;


		respuesta = prompt("desea seguir: ");

	}

	promedioEdadTotal = acumuladorEdad / contadorEdad;

	promedioMujeres = acumuladorMujeres / contadorMujeres;

	promedioHombres = acumuladorHombres / contadorHombres;

	document.write("La cantidad de mujeres es: " + contadorMujeres + "</br>");
	document.write("La cantidad de hombres es: " + contadorHombres + "</br>");
	document.write("La cantidad de mujeres adolescentes es: " + contadorAdolescentesMujeres + "</br>");
	document.write("La cantidad de niños es: " + contadorNiños + "</br>");
	document.write("El promedio de edad es: " + promedioEdadTotal + "</br>");
	document.write("El promedio de edad de mujeres es: " + promedioMujeres + "</br>");
	document.write("El promedio de edad de hombres es: " + promedioHombres + "</br>");
	document.write("La cantidad de edades pares es: " + contadorEdadesPares + "</br>");

	*/

	
	/* --- INICIO --- 

	NAHUEL SILVA

	nivel 3:

	
	el nombre de la persona mas vieja
	el nombre de la persona mas joven

	el sexo de la persona mas vieja
	el sexo de la persona mas joven

	*/

	/*
	var edad;
	var nombre;
	var sexo;
	var flagNombre;
	var viejo;
	var joven;
	var edadMasVieja;
	var edadMasJoven;
	var sexoMasViejo;
	var sexoMasJoven;
	var flagSexo;
	var respuesta;

	flagNombre = 1;

	flagSexo = 1;

	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese nombre: ");
		
		while(!isNaN(nombre))
		{
			nombre = prompt("Error.. Ingrese nombre:")
		}

		edad = prompt("Ingrese edad: ");
		edad = parseInt(edad);

		while(edad < 1 || edad > 120 || isNaN(edad))
		{
			edad = prompt("Error.. Ingrese edad correctamente: ");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese sexo f o m: ");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error.. Ingrese sexo correctamente: ");
		}

		if(flagNombre == 1 || edad < edadMasJoven)
		{
			edadMasJoven = edad;
			joven = nombre;
			sexoMasJoven = sexo;
		}
		if(flagNombre == 1 || edad > edadMasVieja)
		{
			edadMasVieja = edad;
			viejo = nombre;
			sexoMasViejo = sexo;
		}

		flagNombre = 0;
 


		respuesta = prompt("Desea seguir ingresando datos?");
	}
	
	alert("el nombre de la persona mas joven es: " + joven);
	alert("El nombre de la persona mas vieja es: " + viejo);
	alert("el sexo de la persona mas joven es: " + sexoMasJoven);
	alert("El sexo de la persona mas vieja es: " + sexoMasViejo);

	*/

	
	/* ---- INICIO --- 

	NAHUEL SILVA
	
	nivel dios:

	cuantas personas hay con la edad minima
	cuantas personas hay con la edad maxima
	el nombre de la ultima persona con la mayor edad encontrada
	el nombre de la ultima persona con la menor edad encontrada

	*/
	
	var nombre;
	var edad;
	var respuesta;
	var flag;
	var edadMaxima;
	var edadMinima;
	var nombreEdadMaxima;
	var nombreEdadMinima;
	var contadorViejo;
	var contadorJoven;

	flag = 1;	

	contadorViejo = 0;
	contadorJoven = 0;

	respuesta = "si";


	while(respuesta == "si")
	{
		nombre = prompt("Ingrese nombre: ");

		while(!isNaN(nombre))
		{
			nombre = prompt("Error.. Ingrese nombre: ");
		}

		edad = prompt("Ingrese edad: ");
		
		while(edad < 1 || edad > 120 || isNaN(edad))
		{
			edad = prompt("Error.. Ingrese edad nuevamente: ");
			edad = parseInt(edad);
		}

		if(flag == 1 || edad < edadMinima)
		{
			edadMinima = edad;
			nombreEdadMinima = nombre;

			contadorJoven++;
		}

		if(flag == 1 || edad > edadMaxima)
		{
			edadMaxima = edad;
			nombreEdadMaxima = nombre;

			contadorViejo++;
		}

		flag = 0;


		respuesta = prompt("Desea ingresar otro dato?");

	}

	alert("El nombre de la edad mas joven es: " + nombreEdadMinima);
	alert("El nombre de la persona mas vieja es: " + nombreEdadMaxima);
	alert("La cantidad de personas jovenes es: "+ contadorJoven + " cantidad mas vieja: " + contadorViejo);
}



