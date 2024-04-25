function calcularCubo() {
   
    var numero = parseFloat(prompt("Digite um número: "));

    var cubo = numero ** 3;

    return cubo;
}

function exibirResultado() {
    var resultado = calcularCubo();
    alert("O cubo do número fornecido é: " + resultado);
}