
// parametros
function verificarIdade(idade) {
    return idade >= 18;
}

/*
let verificarIdade = function(idade) {
    return idade >= 18;
}*/

// argumentos
let result = verificarIdade(20);

if(result) {
    console.log("É maior")
} else {
    console.log("Não pode acessar esse conteudo");
}

// Calculadora


function somar(numero1, numero2) {
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function elevar(numero1, numero2) {
    return numero1 ** numero2;
}

// callback
function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
    /*switch (operacao) {
        case '+':
            return somar(numero1, numero2);
        case '-':
            return subtrair(numero1, numero2);
        case '*':
            return multiplicar(numero1, numero2);
        case '/':
            return dividir(numero1, numero2);
        default:
            return "Operação inválida!"
    }*/
}

/*
let soma = calcular(2, 5, '+');
let subtracao = calcular(2, 5, '-');
let multiplicacao = calcular(2, 5, '*');
let divisao = calcular(2, 5, '/');
let error = calcular(2, 5, '**');
*/


let soma = calcular(2, 5, somar);
let subtracao = calcular(2, 5, subtrair);
let multiplicacao = calcular(2, 5, multiplicar);
let divisao = calcular(2, 5, dividir);
let extra = calcular(2, 5, elevar);

console.log({
    soma, subtracao, multiplicacao, divisao, extra
});

