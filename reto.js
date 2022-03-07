let median;
const list = [];
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");

// list[m]= ei; ciclo for  to add infinite elements. for var i of list..
const b = document.getElementById("button");
b.addEventListener("click", calcularMediana);

function calcularMediana() {
    list[0]= parseInt(elemento1.value);
    list[1]= parseInt(elemento2.value);
    list[2]= parseInt(elemento3.value);
    list[3]= parseInt(elemento4.value);
    list[4]= parseInt(elemento5.value);

      // const lista= list.length / 2;
    alert("the median is " + list);
}


// }
// function esPar(numerito)
// {
//     numerito = lista.length;
//     if (numerito %2 === 0 ) 
//     {
//     return true;
//     }   
//     else 
//     {
//     return false;
//     } 
// }
// function calcularMediaAritmetica(list){
// const sumaLista = list.reduce (function (valorAcumulado = 0, nuevoElemento) {
// return valorAcumulado + nuevoElemento;});
// const medianaLista = sumaLista / list.length;          
// return medianaLista;
// }
// if (esPar(lista1.length))
// {
// const elemento1 = lista[mitadLista - 1];
// const elemento2 = lista[mitadLista];
// const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2, ]);
// mediana = promedioElemento1y2;
// }
// else {    
// mediana = lista[parseInt(mitadLista)];    
// }
// alert("the median is " + lista);
// alert("the median is " + median);
// }
