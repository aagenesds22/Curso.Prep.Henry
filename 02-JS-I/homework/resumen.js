/* 

    Variables:

    - Se utilizan para almacenar datos y hay tres maneras distintas de declarar una variable: utilizando
    la palabra "var", "const" o "let". Cada una de ellas presenta restricciones o condiciones que deben 
    ser tomadas en cuenta al momento de utilizarlas. Todas las variables son objetos.



    
    Strings:

    - Es uno de los tipos de datos que acepta JavaScript. En el caso de los strings, se trata de bloques de
    texto ubicados siempre entre comillas. EJ: "casa", 'perro', `gato`.



    Funciones:

    - Son un tipo de objeto. Existen funciones "built-in" es decir, que ya vienen con el lenguaje y solo
    hay que invocarlas, por ejemplo, la función Math() o bien, funciones que el propio usuario puede crear, 
    configurar e invocar cuando así lo desee en el script. 

    - Las funciones se configuran para retornar un valor, mediante la palabra "return" porque es la única manera
    que hay para acceder a la función. Todas las variables, datos, resultados y/o cualquier otra funcionalidad
    que se ejecuta DENTRO de una función, no es accesible desde el contexto global de ejecución. Sin embargo,
    una función puede interactuar con otros objetos que estén declarados en el contexto global de ejecución del script.

    - Se declaran de tres formas distintas:

    1) function miFuncion () {}
    2) let testUno = function () {};
    3) let testDos = () => {};

    Cada función puede aceptar argumentos, es decir, variables cuyo contexto de ejecución es únicamente dentro de la función,
    pero que pueden funcionar como parámetros y ser modificados por esa función.

    function miFuncion (argum) { return argum;}


    Declaraciones if y valores booleanos:

    - Es un operador de control de flujo. Se utiliza para chequear mediante operadores de comparación, el valoor booleano
    de un statement. Por ejemplo, mediante el operador de comparación ">" pueden chequearse dos valores numéricos, resultando
    en un valor booleano "false" o "true" para el statement.

    function controlDeFlujo(num1) {

        if (num1 > 20) {

            return true;

        } else {

            return false;
        }
    } 

    Esta función retornará "true" para todos los inputs numéricos que sean mayores a 20, devolverá false por 
    el contrario.

    - Los valores booleanos son un tipo de dato. Surgen de la lógica de Boole, que rige al código binario y al
    funcionamiento de los núcleos procesadores de las computadoras. Son dos valores booleanos: "true" o "false".

    */
   


