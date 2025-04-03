// 1 //

function esPar(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    }
    else {
        console.log(`${numero} es impar`)
    }
}
esPar(4);
esPar(7);

// 2//

function MayoroMenor(A, B) {
    if(A > B) {
        console.log(`${A} es mayor que ${B}`)
    }
    else if(A < B) {
        console.log(`${B} es mayor que ${A}`)
    }
    else {
        console.log("Ambos numeros son iguales")
    }
}
MayoroMenor(3, 1);
MayoroMenor(5, 8);
MayoroMenor(4, 4);

// 3 //

function verificarMultiplo5(numero) {
    if(numero % 5 === 0) {
        console.log(`${numero} es multiplo de 5`)
    }
    else {
        console.log(`${numero} es no multiplo de 5`)
    }
}
verificarMultiplo5(2000) // fecha de salida de Majora's mask//
verificarMultiplo5(1998) // fecha de salida de Ocarina of time//

// 4 //

function imprimirHasta(numero) {
    for (let index = 0; index <= numero; index++) {
        console.log(index);
    }
}
imprimirHasta(5)

// 5 //

function repetirPalabra(palabra, numero) {
    for (let index = 1; index <= numero; index++) {
        console.log(palabra)
    }
}
repetirPalabra("XD", 7) // XD //

// 6 //

function imprimirArray(Array) {
    for (let index = 0; index < Array.length; index++) {
        console.log(Array[index]);
    }
}
imprimirArray(["Gameboy", "Gameboy adavance", "Ds", "3Ds", "Switch"])

// 7 //

function imprimirArraySinQuinto(array) {
    for (let index = 0; index < array.length; index++) {
        if (index !== 4) { 
            console.log(array[index]);
        }
    }
}
imprimirArraySinQuinto([1986, 1991, 1993, 2002, 1987, 2004, 2006, 2011, 2017, 2023]);  //fecha de salida de los mejores juegos de Zelda,asi que Zelda 2 no va a aparecer consola//

// 8 //

function ArrayDeNumeros(numeros, numero) {
    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index] * numero)
    }
}
ArrayDeNumeros([1981, 1985, 1986, 1910, 1991, 1992, 1993, 1996, 2001, 2010], 2); //fecha de salida del primer juego de Donkey Kong,Mario,Zelda,Fire emblem,Metroid,Kirby,Star fox,Pokemon,Animal Crossing y Xenoblade//