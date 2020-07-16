/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumar;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    sumar = precioUno + precioDos + precioTres;
    sumar = parseInt(sumar);

    alert("La suma es: " + sumar);


}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = txtIdPrecioUno.value;
    precioUno = parseInt(precioUno);

    precioDos = txtIdPrecioDos.value;
    precioDos = parseInt(precioDos);

    precioTres = txtIdPrecioTres.value;
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert("El promedio es: " + promedio);

}
function PrecioFinal () 
{
    
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var iva;
    var PrecioFinal;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseInt(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;
    suma = parseInt(suma);

    //iva = suma * 0,21; ---- preguntar xq no multiplica el 0,21 
    iva = (suma * 21) / 100;

    PrecioFinal = suma + iva;
    alert("El precio final es: " + PrecioFinal);

}