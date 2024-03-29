
let idade = 16;

let isNumber = typeof idade === 'number';

if (isNumber) {
    console.log("Minha variavel idade é do tipo number");
}

if (idade > 18) {
    console.log("Idade é maior que 18");
} else if (idade === 18) {
    console.log("idade é igual a 18");
} else if (idade <= 16) {
    console.log("idade é menor ou igual a 16");
} else {
    console.log("Idade não maior nem igual a 18");
};