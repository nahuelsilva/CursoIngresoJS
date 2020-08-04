/*
	NAHUEL SILVA

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var mensaje;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	
	edadIngresada = prompt("Ingrese edad tiene entre 18 y 90 años: ");
	edadIngresada = parseInt(edadIngresada);

	while(!(edadIngresada > 17 && edadIngresada < 91))
	{
		edadIngresada = prompt("Error.. Ingrese edad correctamnete: ");
		edadIngresada = parseInt(edadIngresada);
	}

	txtIdEdad.value = edadIngresada;
	////////////
	sexoIngresado = prompt("Registre su sexo. Debe ser F o M : ");

	while(sexoIngresado != "m" && sexoIngresado != "f")
	{
		sexoIngresado  = prompt("ERROR... ingrese f o m segun corresponda: ");
	}
	txtIdSexo.value = sexoIngresado;
	/////////

	estadoCivilIngresado = prompt("Estado civil.. ya sabiendo q numero corresponde para cada caso: ");

	while(estadoCivilIngresado < 0 && estadoCivilIngresado > 5)
	{
		estadoCivilIngresado = prompt("NO es valido. Intente de nuevo: ");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	switch(estadoCivilIngresado)
	{
		case 1 :
			estadoCivilIngresado = "Soltero";
			break;

		case 2 : 
			estadoCivilIngresado = "Casado";
			break;

		case 3 :
			estadoCivilIngresado = "Divorsiado";
			break;
			
		default :
			estadoCivilIngresado = "Viudo";
			break;
	}
	

	txtIdEstadoCivil.value = estadoCivilIngresado;

	//////////

	sueldoBruto = prompt("Ingrese sueldo bruto tiene q ser mayor a 8000: ");
	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000)
	{
		sueldoBruto = prompt("ERROR.. ingrese monto: ");
		sueldoBruto = parseInt(sueldoBruto);
	}

	txtIdSueldo.value = sueldoBruto;
	/////////

	legajo = prompt("Ingrese numero de legajo: ");
	legajo = parseInt(legajo);

	while(legajo < 1000 || legajo > 9999)
	{
		legajo = prompt("Error.. tiene q ser 4 cifras: ");
		legajo = parseInt(legajo);
	}
	txtIdLegajo.value = legajo;

	///////

	nacionalidad = prompt("Ingrese nacionalidad: ");

	while(nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n")
	{
		nacionalidad = prompt("NO es correcto ingrese nuevamente: ");

	}

	switch(nacionalidad)
	{
		case "a" :
			nacionalidad = "Argentino";
			break;
		
		case "e" :
			nacionalidad = "Extranjero";
			break;
			
		default : 
			nacionalidad = "Nacionalizado";
			break

	}

	txtIdNacionalidad.value = nacionalidad

}
