const usuarioCorrecto = ('TheBridge');
const passwordCorrecto = ('FullStack');

// do {
//     function i (usuarioCorrecto,passwordCorrecto) {
//         if (usuario == usuarioCorrecto && password == passwordCorrecto) {
//             prompt("Acceso garantizado!");
//         } else {
//             prompt("No es correcto, inténtalo de nuevo");
//     }


// } while(i <= 3)




// let i = 0
// do {
//     var usuario = prompt("Inserta tu nombre de usuario:");
//     var password = prompt("Inserta tu contraseña:");
//     i++
//     console.log('entra' + i);
//     if (usuario == usuarioCorrecto && password == passwordCorrecto) {
//         alert("Acceso garantizado!");
//     } else {
//         alert("No es correcto, inténtalo de nuevo");
//     }
// } while (i < 3);



// Corrección
var userOK = "Estudiante";
var passwordOK = "batman17";
var user, password, contador = 3;
var validation = false;
alert("Hola");

do {
    user = prompt("Usuario");
    password = prompt("Password");
    // los booleanos pueden almacenar operaciones
    // validation = user == userOK && password == passwordOK; 
    if (user == userOK && password == passwordOK) {
        validation = true;
    } else {
        contador--;
        alert("Usuario o password incorrecto.");
    }
    if (contador > 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intentos.");
    } else if (contador == 1 && validation == false) {
        alert("Piensa mejor, todavía tienes " + contador + " intento.");
    }
} while (!validation && contador > 0);
if (validation) {
    alert("Usuario y password correctos.");
} else {
    alert("Has agotado tus tres intentos");
}