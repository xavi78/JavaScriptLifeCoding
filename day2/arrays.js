var array1=[4,'casa',true,0.8, {a:43}];
console.log(array1[0]);
console.log(array1[3]);
console.log(array1[100]);
console.log(array1[4].a);
console.log(array1[4]);
//OPERADORES
console.log(-"casa");
console.log( 2 ** 4);
var a = 15;
a= a +10;
a +=10;
console.log(a);
var c= 4;
if(c!=5){console.log("es diferente")};
if ("3"===3)
{
    console.log("Iguales");
}else{
    console.log("Son direferentes");
}
("3"===3)?console.log("Iguales"):console.log("Son direferentes");


console.log("hola" + "Mundo");
console.log("3"+"5");
console.log(3+"5");
console.log(-"3"+5);
console.log("hola" + 1 + 4);
console.log(1 + 4 + "hola" );
console.log("hola" + (1 + 4));
var myFuncion = function()
{var x = 0;
    return (x += 1, x);

}
console.log(myFuncion());

(function autoejecutable(){
    console.log("Se autoejecuta");
})();

function comprobacion (a)
{
    return (a == 100) ? "Es igual que 100": "Es diferente" ;
    /*Logica de negocio*/
}
console.log(comprobacion(100));