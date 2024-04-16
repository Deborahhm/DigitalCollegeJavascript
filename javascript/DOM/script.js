
import elements from "./js/elements.js";

console.log(elements.formMsg);

// let formProdutos = document.getElementById('form-produtos');
// let inputName = document.getElementById('input-name');
// let inputPrice = document.getElementById('input-price');
// let inputNameError = document.getElementById('input-name-error');
// let inputPriceError = document.getElementById('input-price-error');
// let formMsg = document.getElementById('form-msg');
// let productList = document.getElementById('product-list');

let storage = window.localStorage.getItem('products');
storage = JSON.parse(storage) ?? [];


productList.querySelector('tbody').addEventListener('click', event => {
    let targetIndex = event.target.dataset.editindex;

    if(!targetIndex) {
        return;
    }

    targetIndex = parseInt(targetIndex);

    let product = storage[targetIndex];

    inputName.value = product.name;
    inputPrice.value = product.price;
    formProdutos.dataset.formindex = targetIndex;
})

storage.forEach(function (item, index) {

    let trNode = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdAction = document.createElement('td');
    
    let editLink = document.createElement('a');
    editLink.href = "#";
    editLink.textContent = "Editar ";
    editLink.dataset.editindex = index;
    
    let deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.textContent = "Excluir ";
    deleteLink.dataset.index = index;

    deleteLink.addEventListener('click', event => {
        let dataIndex = event.target.dataset.index;
        let parentTr = event.target.parentNode.parentNode
        parentTr.remove();
        
        storage = storage.filter(function(item, index) {
            return parseInt(dataIndex) !== index
        });

        window.localStorage.setItem('products', JSON.stringify(storage));
    });

    tdAction.append(editLink, deleteLink);
    tdName.textContent = item?.name;
    tdPrice.textContent = item?.price;
    trNode.append(tdName, tdPrice, tdAction);
    productList.querySelector('tbody').prepend(trNode);
});

formProdutos.addEventListener('submit', event => {
    event.preventDefault();

    inputNameError.textContent = '';
    inputPriceError.textContent = '';

    let hasError = false;

    if(!inputName.value){
        inputNameError.textContent = 'Campo Nome precisa ser preenchido';
        hasError = true;
    }

    if(!inputPrice.value) {
        inputPriceError.textContent = 'Campo Preço precisa ser preenchido';
        hasError = true;
    }

    if(hasError) {
        formMsg.classList.remove('show');
        return;
    }

    let product = {
        name: inputName.value,
        price: inputPrice.value
    }
    
    let formIndex = event.target.dataset.formindex;
    formIndex = parseInt(formIndex);

    let editLink = document.createElement('a');
    editLink.href = "#";
    editLink.textContent = "Editar ";

    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdAction = document.createElement('td');
    let trNode = "";
    let isSave = true;

    if((typeof formIndex === 'number' || formIndex) && storage[formIndex]) {
        storage[formIndex] = product;
        trNode = document.querySelector(`[data-editindex="${formIndex}"]`).parentNode.parentNode
        trNode.innerHTML = '';
        editLink.dataset.editindex = formIndex;
        isSave = false;
    } else {
        storage.push(product);
        trNode = document.createElement('tr');
        editLink.dataset.editindex = storage.length-1;
    }

    window.localStorage.setItem('products', JSON.stringify(storage));

    tdName.textContent = inputName.value;
    tdPrice.textContent = inputPrice.value;
    
    let deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.textContent = "Excluir ";
    deleteLink.classList.add('delete-action');
    deleteLink.dataset.index = storage.length-1;

    deleteLink.addEventListener('click', event => {
        let dataIndex = event.target.dataset.index;
        let parentTr = event.target.parentNode.parentNode
        parentTr.remove();
        
        storage = storage.filter(function(item, index) {
            return parseInt(dataIndex) !== index
        });

        window.localStorage.setItem('products', JSON.stringify(storage));
    });

    tdAction.append(editLink, deleteLink);
    trNode.append(tdName, tdPrice, tdAction);

    if(isSave) {
        productList.querySelector('tbody').prepend(trNode);
    }

    formMsg.classList.add('show');
    formProdutos.reset();

    setTimeout(() => {
        formMsg.classList.remove('show');
    }, 2000);
    
});






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