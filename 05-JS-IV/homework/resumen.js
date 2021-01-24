/*
    -Objetos:

    Todo en JavaScript es un objeto; el tiempo de ejecución de un script se hace mediante un objeto: window. El
    usuario puede crear objetos, las funciones son objetos, ya sean built-in o creadas por el usuario, las clases son objetos,
    las variables, los arrays, etc. 
    Pueden crearse objetos con notación de objetos:

    let obj = {}; // objeto vacío
    

    Toda propiedad que se añade a un objeto, constituye una sintaxis del tipo clave:valor (key-value pair), que es
    accesible desde el exterior.

    let objDos = {
        clave: uno,
        clave: dos
    }



    -Propiedades:

    Son pares clave:valor pertenecientes a un objeto. Contiene datos. Una propiedad puede ser creada, accedida, modificada y eliminada
    desde el exterior del objeto.



    -Métodos:

    Son funciones que se declaran utilizando la sintaxis clave-valor dentro de un objeto. Estos métodos tienen el nombre
    de la clave que el usuario defina.



    -Bucle for in:

    Este bucle itera por cada clave de un objeto, pudiendo obtener cada valor si se utiliza la notación
    objeto[iterador].

    let ex = [];
    for (let iterador in obj) { ex.push(objeto[iterador]);}
    return ex; //devolverá todos los valores del objeto obj ordenados en un array



    -Notación de puntos y corchetes:

    Son dos maneras diferentes de acceder a los objetos. Mediante notación de puntos, se coloca el nombre del objeto 
    seguido de un punto, y a continuación una propiedad con igual nombre o un método que debe invocarse.
    En el caso de los corchetes, si se quiere acceder a una propiedad debe ir en forma de string dentro de los corchetes
    o bien, debe pasarse una variable que apunte a un string con el nombre de la propiedad o método. Si es un método,
    debe invocarse al final del corchete.


*/