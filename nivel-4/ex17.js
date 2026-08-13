function calcularSalario(salario, bonus) {
    let valorDesconto = salario* bonus / 100;
    return salario + valorDesconto;
}
let valorFinal = calcularSalario(3000, 10);
console.log(valorFinal);