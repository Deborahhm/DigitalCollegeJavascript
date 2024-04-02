
let frutas = [
    "maçã",  "manga", "laranja", "goiaba", "acerola", "caja"
];

let existeCaja = false;

for (let index = frutas.length-1; index >= 0; index--) {
    if(frutas[index] === 'caja') {
        existeCaja = true;
    }
}

// for .. in
for (let index in frutas) {
    let lastIndex = frutas.length - 1 - index;
    // console.log(frutas[lastIndex]);
}

// for .. of
for (let fruta of frutas) {
    console.log(fruta)
}
