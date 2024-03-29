
/*
    Tipos primitivos
*/
let nome = "Kelvys Moura"; // string
let idade = 27; // number
let ehAluno = false; // boolean (bool)
let ehProfessor = true; // boolean (bool)
let aulaDoDiaPrimeiro = undefined; // undefined
let aulaDoDiaDois; // undefined
let salaDeAula = null; // Null

/*
    Conjunto de dados, Lista (Array)
    Estrutra guia por indice, cada valor receber uma chave numerica única
*/

let alunos = [
    "Alisson", 
    "Joilton",
    "Samuel"
];

/*
    Objects (Similar ao array mas eu consigo definir o nome do "indice")
*/

// let turma34 = [20, "19:30", "21:30", "Seg - Qui"];

let turma34 = {
    quantidadeDeAlunos: 34,
    horaDeInicio: "08:00",
    horaFim: "12:00",
    diasDaSemana: "Sab"
};

/*
    Misturando array e objetos
 */

let turmas = {
    fs34: {
        quantidadeDeAlunos: 34,
        diasDaSemana: "Sab"
    },
    fsl02: {
        quantidadeDeAlunos: 20,
        diasDaSemana: "Seg - Qui"
    }
};

let minhasTurmas = [
    {
        codigo: "fs30",
        quantidadeDeAlunos: 20,
        diasDaSemana: "Sab"
    },
    {
        codigo: "fs34",
        quantidadeDeAlunos: 34,
        diasDaSemana: "Sab"
    }
];

let turma02 = {
    quantidadeDeAlunos: 20,
    horaDeInicio: "19:30",
    horaFim: "21:30",
    diasDaSemana: ["Seg", "Ter", "Qua", "Qui"]
}


let data = '27/03/2024';
let local = "Digital College Aldeota";

let evento = { data, local };

evento.title = "Aprendendo JS";

let nomeDoMeuAtributo = 'title';

console.log(evento[nomeDoMeuAtributo]);




