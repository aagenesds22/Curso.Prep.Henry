/*
    Arrays: 
    - Las matrices o arreglos, son una colección de tipos de datos. Almacenan elementos de todos los tipos de datos
    en JavaScript. Es posible acceder a la colección que almacena la matriz desde el exterior, también es posible
    invocar métodos propios de los arrays, que ya están previamente definidos (built-in). Es posible modificar los elementos
    que componen la matriz y no sólo acceder a ellos.

    Para acceder a un elemento de la matriz:

    let arr = ["tres", "cuatro", dos"];

    console.log(arr[0]) // devuelve "tres"


    Para modificar un elemento de la matriz:

    arr[0] = "cincuenta";
    console.log(arr[0]) // "cincuenta"

    Métodos:

    arr.length // devuelve la longitud total del array (siempre es un numero más que el índice de cada elemento)

    arr.push("ocho") // agrega "ocho" en la cola del array, en el útimo índice

    arr.pop() // elimina el último elemento del array y lo devuelve

    arr.shift() // elimina el primer elemento del array y lo devuelve
    
    arr.unshift("cuarenta") // agrega un elemento al principio del array


    También es posible iterar (recorrer) cada elemento del array, buscar un elemento particular, filtrarlo, 
    eliminarlo, modificarlo, sumarlo, etc. Todo esto es posible gracias a los loops for y los métodos built-in
    del objeto Array.

*/