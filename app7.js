

// i = insensible
// g = todas apariciones
//m multilinea
// \w cualquier letra
// \d decimales

// var reg1 = RegExp("a");
// var reg2 = /a/;

var texto = "La Respuesta de la suma es: 45 + 60 = 105";
console.log(texto);

var arr = texto.match(/\d{1,}|respuesta/ig );

console.log(arr);

