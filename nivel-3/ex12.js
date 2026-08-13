function verificarNumero (numero) {
    if (numero >1) {
        return "Positivo";
    } else  if (numero < 0){
        return "Negativo";
    } else{
        return "Zero"
    }
}

let numero = verificarNumero(-6);


console.log(numero);
