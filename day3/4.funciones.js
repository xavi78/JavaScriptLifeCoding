//función
/**
function suma (a,b){
    return  a+b;
}

console.log(suma(4,5));
 **/
//Expresión funciones.
/*
var suma = function(a,b){return a+b};
var x = suma(4,5);
console.log(x);
*/
//Función autoejecutable
/*(
    function(a,b){
        return console.log(a+b);
    }
)(4,5);*/

//Objeto Arguments.
function myConcat(separator)
{
    var result = "", i;
    for (i=0; i<arguments.length; i++){
        result += arguments[i]+separator;
    }
    return result
}
console.log(myConcat("Hola", "Mundo"," ","Que tal"));
