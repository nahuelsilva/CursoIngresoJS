
function mostrar()
{
  /*
		
	Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	la Marca y el fabricante.
	Se debe Informar al usuario lo siguiente:
	a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	b) Del tipo con mas unidades, el promedio por compra
	c) Cuántas unidades de jabones hay en total

  */

  var productos;
  var precio;
  var cantidadDeUnidades;
  var marca;
  var fabricante;
  var alcoholMasBarato;
  var cantidadAlcoholBarato;
  var fabricanteAlcoholBarato;
  var flagAlcohol;
  var mayorUnidades;
  var productoMayorUnidad;
  var precioMayorUnidad;
  var promedioMayorUnidad;
  var acumuladorJabon;
  var flagUnidades;
  var i;

  i = 0;

  acumuladorJabon = 0;
  flagAlcohol = 1;
  flagUnidades = 1;

  while(i < 5)
  {
	productos = prompt("ingrese productos: ");

	    while(productos != "barbijo" && productos != "alcohol" && productos != "jabon")
		{	
			productos = prompt("Error.. ingrese producto:");

		}
		
		precio = prompt("Ingrese precio del producto: ");
		precio = parseInt(precio);
		
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = prompt("Error.. Ingrese correctamente precio: ");
			precio = parseInt(precio);
		}

		cantidadDeUnidades = prompt("Ingrese las unidades: ");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);

		while(cantidadDeUnidades < 0 || cantidadDeUnidades > 1000 || isNaN(cantidadDeUnidades))
		{
			cantidadDeUnidades = prompt("Error. Reingrese unidades: ");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}

		marca = prompt("Ingrese marca del producto: ");

		fabricante = prompt("Ingrese fabricante del mismo: ");

		if(productos == "alcohol")
		{
			if(flagAlcohol == 1 || precio < alcoholMasBarato)
			{
				alcoholMasBarato = precio;
				cantidadAlcoholBarato = cantidadDeUnidades;
				fabricanteAlcoholBarato = fabricante;
			}
			flagAlcohol = 0;
		}

		if(flagUnidades == 1 || cantidadDeUnidades > mayorUnidades)
		{
			mayorUnidades = cantidadDeUnidades;
			productoMayorUnidad = productos;
			precioMayorUnidad = precio;
		}
		flagUnidades = 0;

		if(productos == "jabon")
		{
			acumuladorJabon = acumuladorJabon + cantidadDeUnidades;
		}
	
	

	 	i++;
  }
  
  promedioMayorUnidad = mayorUnidades / precioMayorUnidad;

  alert("El fabricante de alcohol mas barato es: " + fabricanteAlcoholBarato );
  alert("El promedio del tipo con mas unidades es: " + promedioMayorUnidad + " el producto es: " + productoMayorUnidad);
  alert("la cantidad total de jabon es: " + acumuladorJabon);



}
