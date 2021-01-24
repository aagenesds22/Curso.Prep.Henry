/*
   Callbacks:

   - Un callback es una función que se pasa como argumento de otra función. A esta función callback que va como argumento,
   se le pueden pasar más argumentos.

   function powerOfTwo(nmb) {
      return Math.pow(nmb, 2);
   }


   function execution(nro, cb) {
      return cb(nro);

   }

   console.log(execution(3, powerOfTwo)); // "9"


*/