/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;
    var perimetro;
    var cantidadfinal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    perimetro = 2 * largo + 2 * ancho;
    
    cantidadfinal = perimetro * 3;


    alert ("La cantidad de alambre es: " + cantidadfinal + " metros");

}
function Circulo () 
{
    var radio;
    var circunferencia;
    var alambre;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    circunferencia = (2 * radio) * 3,1415;

    alambre = circunferencia * 3; 

    alert("La cantidad de alambre para el circulo es: " + alambre + " metros");

}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    area = largo * ancho;
    area = parseInt(area);

    cemento = area * 2;
    cemento = parseInt(cemento);

    cal = area * 3;
    cal = parseInt(cal);

    alert("El area a cubrir es de: " + area + "metros cuadrados");

    alert("Se debe usar de cal: " + cal + " bolsas" + " y de cemento: " + cemento + " bolsas");



    
}