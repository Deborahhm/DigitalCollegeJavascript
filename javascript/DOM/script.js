

import elements from "./js/elements.js";
import storage from "./storage.js";
import ProductLine from './js/components/ProductLine.js';

let products = storage.getProducts();

elements.productList.querySelector('tbody').addEventListener('click', event => {
    event.preventDefault();

    let targetIndex = event.target.dataset.editindex;

    if(!targetIndex) {
        return;
    }

    targetIndex = parseInt(targetIndex);

    let product = products[targetIndex];

    elements.inputName.value = product.name;
    elements.inputPrice.value = product.price;
    elements.formProdutos.dataset.formindex = targetIndex;
})

products.forEach(function (item, index) {

    let tr = ProductLine({
        name: item?.name,
        price: item?.price,
        id: index
    });

    elements.productList.querySelector('tbody').innerHTML += tr;
});

elements.formProdutos.addEventListener('submit', event => {
    event.preventDefault();

    elements.inputNameError.textContent = '';
    elements.inputPriceError.textContent = '';

    let hasError = false;

    if(!elements.inputName.value){
        elements.inputNameError.textContent = 'Campo Nome precisa ser preenchido';
        hasError = true;
    }

    if(!elements.inputPrice.value) {
        elements.inputPriceError.textContent = 'Campo Preço precisa ser preenchido';
        hasError = true;
    }

    if(hasError) {
        elements.formMsg.classList.remove('show');
        return;
    }

    let product = {
        name: elements.inputName.value,
        price: elements.inputPrice.value
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

    if((typeof formIndex === 'number' || formIndex) && products[formIndex]) {
        products[formIndex] = product;
        trNode = document.querySelector(`[data-editindex="${formIndex}"]`).parentNode.parentNode
        trNode.innerHTML = '';
        editLink.dataset.editindex = formIndex;
        isSave = false;
    } else {
        products.push(product);
        trNode = document.createElement('tr');
        editLink.dataset.editindex = products.length-1;
    }

    storage.setProducts(products);

    tdName.textContent = elements.inputName.value;
    tdPrice.textContent = elements.inputPrice.value;
    
    let deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.textContent = "Excluir ";
    deleteLink.classList.add('delete-action');
    deleteLink.dataset.index = products.length-1;

    deleteLink.addEventListener('click', event => {
        let dataIndex = event.target.dataset.index;
        let parentTr = event.target.parentNode.parentNode
        parentTr.remove();
        
        product = product.filter(function(item, index) {
            return parseInt(dataIndex) !== index
        });
        
        storage.setProducts(product);
    });

    tdAction.append(editLink, deleteLink);
    trNode.append(tdName, tdPrice, tdAction);

    if(isSave) {
        elements.productList.querySelector('tbody').prepend(trNode);
    }

    elements.formMsg.classList.add('show');
    elements.formProdutos.reset();

    setTimeout(() => {
        elements.formMsg.classList.remove('show');
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