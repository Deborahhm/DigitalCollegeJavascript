
let calculadora = {
    resultado: 0,

    somar: function(numero) {
        return this.resultado += numero
    },

    subtrair: function(numero) {
        return this.resultado -= numero
    },
    
    multiplicar: function (numero) {
        return this.resultado *= numero
    },
    
    dividir: function (numero) {
        return this.resultado /= numero
    },
    
    executar: function(numero, operacao) {
        return this[operacao](numero);
    }
};

let resultado = calculadora.executar(2, 'somar');
resultado = calculadora.executar(5, 'multiplicar');
resultado = calculadora.executar(4, 'dividir');


