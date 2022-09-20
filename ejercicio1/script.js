var n1 = prompt("Inserta el primer número");
var n2 = prompt("Inserta segundo número");
var n3 = prompt("Inserta el tercer número");

if (n1 < n2) {
    if (n1 < n3) {
        alert(n1)
    }
}
if (n2 < n1) {
    if (n2 < n3) {
        alert(n2)
    }
}
if (n3 < n1) {
        if (n1 < n3) {
            alert(n3)
        }
}

// alert ("Inserta un número entero")
// var a =prompt("a")
// var b =prompt("b")
// var c =prompt("c")
// if (a <= b && a <= c) {
//     alert (a);
// } else if (b <= a && b <= c) {
//     alert (b);
// } else {
//     alert (c);
// }