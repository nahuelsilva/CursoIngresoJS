/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var celcius;
    var Fahrenheit;

    Fahrenheit = txtIdTemperatura.value;
    Fahrenheit = parseInt(Fahrenheit);

    celcius = (Fahrenheit - 32) * 5/9;
    
    alert ("La temperatura en fahrenheit es : " + Fahrenheit + " y en celcius: " + celcius);


}

function CentigradosFahrenheit () 
{
    var celcius;
    var fahrenheit;

    celcius = txtIdTemperatura.value;
    celcius = parseInt(celcius);

    fahrenheit = (celcius * 9/5) + 32;

    alert ("La temperatura en celcius es: " + celcius + " la temperatura en fahrenheit es: " + fahrenheit);
}
