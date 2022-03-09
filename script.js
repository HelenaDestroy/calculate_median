 // list[m]= ei with a for cycle to add infinite elements, for var i of list.. input "how many elements in list"?
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");
const b = document.getElementById("button");
b.addEventListener("click", calcularMediana);

let median;

function calcularMediaAritmetica(element_1, element_2) {
const sumList = [element_1, element_2].reduce(function (accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;        });
    const middleList = sumList / 2;
    return middleList;
}

function esPar(list) {
    if (list.length % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
function calcularMediana() {
    const list = [];
    list.push(parseInt(elemento1.value));
    list.push(parseInt(elemento2.value));
    list.push(parseInt(elemento3.value));
    list.push(parseInt(elemento4.value));
    list.push(parseInt(elemento5.value));
    list.sort();

    if (esPar(list)) {  //si se llama dentro del if ya está
        const lista = list.length / 2;
        const element_1 = list[lista - 1];
        const element_2 = list[lista];
        const element1y2 = calcularMediaAritmetica([element_1, element_2,]);
        median = element1y2;
    }
    else {
        median = list[2];    //WHATEVER
    }

    document.getElementById("result").innerHTML = "the median is " + median + "<br/> sorted list:" + list;
}
