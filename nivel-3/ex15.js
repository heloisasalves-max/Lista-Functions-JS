function classificarNota(nota) {
    if (nota >= 9) {
        return "Aprovado";
    } else if (nota >=7 ){
        return "Bom";
    }else if (nota =6){
        return "Aprovado";
    }else {
        return "Reprovado"
    }
}

console.log(classificarNota(7));