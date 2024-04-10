
let formProdutos = document.getElementById('form-produtos');
let inputName = document.getElementById('input-name');
let inputPrice = document.getElementById('input-price');
let outputName = document.getElementById('name');
let outputPrice = document.getElementById('price');
let inputNameError = document.getElementById('input-name-error');
let inputPriceError = document.getElementById('input-price-error');
let formMsg = document.getElementById('form-msg');


formProdutos.addEventListener('submit', event => {
    event.preventDefault();

    inputNameError.textContent = '';
    inputPriceError.textContent = '';

    if(!inputName.value){
        inputNameError.textContent = 'Campo Nome precisa ser preenchido';
    }

    if(!inputPrice.value) {
        inputPriceError.textContent = 'Campo Preço precisa ser preenchido'
    }

    window.localStorage.setItem('nomeDoProduto', inputName.value);
    window.localStorage.setItem('precoDoProduto', inputPrice.value);
    formMsg.classList.add('show')
    formProdutos.reset()
})


inputName.addEventListener('input', event => {
    outputName.textContent = event.target.value;
});

inputPrice.addEventListener('input', event => {
    outputPrice.textContent = event.target.value;
})







/*let byTagName = document.getElementsByTagName('h1')
let byClassName = document.getElementsByClassName('meu_titulo')
let byId = document.getElementById('titulo-1');
let bySelector = document.querySelector('.body .meu_titulo')
let bySelectorAll = document.querySelectorAll('.body .meu_titulo')

console.log('antes do for');

for (let index = 0; index <= 10000000000; index++){
    index += 10
}

console.log({
    byTagName, 
    byClassName, 
    byId, 
    bySelector, 
    bySelectorAll
})*/