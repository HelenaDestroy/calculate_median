const list = []; // list[m]= ei with a for cycle to add infinite elements, for var i of list.. input "how many elements in list"?
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");

const b = document.getElementById("button");
b.addEventListener("click", calcularMediana);

const lista = list.length / 2;
let median;

function esPar(lista) 
{
    if (lista %2 === 0 ) 
    {
    return true;
    }   
    else 
    {
    return false;
    } 
}
function calcularMediana()
{
    list[0]= parseInt(elemento1.value);
    list[1]= parseInt(elemento2.value);
    list[2]= parseInt(elemento3.value);
    list[3]= parseInt(elemento4.value);
    list[4]= parseInt(elemento5.value);
   
    function calcularMediaAritmetica()
    {
    const sumList = list.reduce (function (accumulatedValue = 0, newElement){
    return accumulatedValue + newElement;});
    const middleList = sumList / 2          
    return middleList    
    }

    esPar(lista);  
    if (esPar(lista))
        {
        const element_1 = list[lista - 1];
        const element_2 = list[lista];
        const element1y2 = calcularMediaAritmetica([element_1, element_2, ]);
        median = element1y2;
        }   
    else 
    {    
    median = middleList;    
    }
document.getElementById("result").innerHTML= "the median is " + median;
}
