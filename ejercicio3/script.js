var n1 = prompt("Inserta número 1");
var n2 = prompt("Inserta número 2");

function calculadora(operacion){
    if (operacion == 'suma') {
        prompt('El resultado es', parseInt(n1) + parseInt(n2));
    }
    if (operacion == 'resta') {
        prompt('El resultado es', parseInt(n1) - parseInt(n2));
    }
}
