//Tabla;
/*for(var x=0;x<=10;x++){
    console.log("--------- \n");
    console.log ("Tabla del -> "+ x);
    for(var y = 0 ; y<=10;y++)
    {
        console.log(x+" * "+ y +" = "+ x*y);
    }

}*/

//tabla inversa.
/*
for(var x=10; x>=0; x--)
{
    console.log("--------- \n");
    console.log ("Tabla del -> "+ x);
    for (var y= 10; y>=0; y--){
        console.log(x+" * "+ y +" = "+ x*y);
    }

}
*/

//Arrays.

var matriz=[
    ['00','01','02'],
    ['10','11','12'],
    ['20','21','22']
];

for(var i = 0; i<3; i++){
    for(var j=0; j<4; j++){
        console.log(matriz[i][j]);
    }
}