let nota = 9;

if (nota >= 90 && nota <= 100) {
    console.log("Calificación " + nota + " = A ");
} else if (nota >= 80 && nota < 90) {
    console.log("Calificación " + nota + " = B ");
} else if (nota >= 70 && nota < 80) {
    console.log("Calificación " + nota + " = C ");
} else if (nota >= 60 && nota < 70) {
    console.log("Calificación " + nota + " = D ");
} else if (nota >= 0 && nota < 60) {
    console.log("Calificación " + nota + " = F ");
} else {
    console.log("La nota ingresada no es válida.");
}