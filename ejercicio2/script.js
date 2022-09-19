var frase = prompt("Inserta frase");
var letra = prompt("Inserta letra");

var veces = [] 

for (var i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        veces.push(i);
    }
}
alert(veces.length);