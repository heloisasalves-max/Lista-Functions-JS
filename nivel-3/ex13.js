function verificarPar (numero) {
    if (numero %2 === 0) {
        return "Par";
    } else{
        return "Ímpar"

    }
}
let numero = verificarPar(2);


console.log(numero);