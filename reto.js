let mediana;
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");
const list = [];
list[0]= parseInt(elemento1.value);
list[1]= parseInt(elemento2.value);
list[2]= parseInt(elemento3.value);
list[3]= parseInt(elemento4.value);
list[4]= parseInt(elemento5.value);


// list[m]= ei; ciclo for  to add infinite elements. for var i of list..
const b = document.getElementById("button");
b.addEventListener("click", calcularMediana);

function calcularMediana() {


alert("the median is " + list);

}