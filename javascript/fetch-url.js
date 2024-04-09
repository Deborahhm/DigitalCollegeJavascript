
let url = 'https://raw.githubusercontent.com/fsl02/curso/main/html-css/README.md';
let jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

let requestJson = fetch(jsonUrl);

requestJson
.then(response => response.json())
.then(json => {
    console.log('render posts');
})


let request = fetch(url);

request.then(function(response) {
    response.text().then(function (texto) {
        // console.log(texto);
    })
});



console.log("Aguarde resultado...");


/*

let produtos = [
    {
        "nome": "iPhone 45"
    },
    {
        nome: "Nike"
    }
];

// Converte objeto JS em texto JSON
let jsonToText = JSON.stringify(produtos);

// Converte texto JSON em objeto JS
let textToJson = JSON.parse(jsonToText);

console.log(typeof produtos);
console.log(typeof jsonToText);

*/

