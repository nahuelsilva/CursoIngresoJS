function mostrar()
{
    /*

    Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por 
document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
    */

    var marca;
    var peso;
    var temperatura;
    var paresTemperatura;
    var respuesta;

    paresTemperatura = 0;

    respuesta = "si";

    while(respuesta == "si")
    {
        marca = prompt("Ingrese marca del producto: ");

        peso = prompt("ingrese peso del producto: ");
        peso = parseInt(peso);

        while(peso < 1 || peso > 100)
        {
            peso = prompt("Error..Ingrese peso del producto entre 1 y 100: ");
            peso = parseInt(peso);
        }

        temperatura = prompt("ingrese temperatura del producto entre -30 y 30 : ");
        temperatura = parseInt(temperatura);

        while(temperatura < -30 || temperatura > 30)
        {
            temperatura = prompt("Error. ingrese nuevamente temperatura: ");
            temperatura = parseInt(temperatura);
        }

        if(temperatura % 2 == 0)
        {
            paresTemperatura++;
        }


        respuesta = prompt("Desea ingresar otro producto? ");
    }

}
