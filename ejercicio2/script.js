var frase = prompt("Inserta frase");
var letra = prompt("Inserta letra");

var veces = [] // Consume más memoria ya que guarda arrays innecesarios

for (var i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        veces.push(i); // Consume más tiempo ya que tiene que ejecutar una acción 
    }
}
alert(veces.length);
alert(veces);


// var sentence = window.prompt("Inserta una frase: ");
// var letter = window.prompt("Inserta una letra: ");
// let cont = 0;
// for(let i=0; i<sentence.length; i++){
//     if (sentence[i] == letter){
//         cont++;
//     }
// }

// alert("La letra "+ letter + " aparece " + cont + " veces" );