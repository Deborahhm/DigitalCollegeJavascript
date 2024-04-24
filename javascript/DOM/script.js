
import elements from "./js/elements.js";
import storage from "./js/storage.js";
import ProductLine from './js/components/ProductLine.js';
import FormProduct from "./js/components/FormProduct.js";
import { createState } from "./js/state.js";

let editIdState = createState();

document.getElementById('form-products-container').innerHTML = FormProduct({editIdState});

let products = storage.getProducts();

products.forEach(function (item, index) {

    let tr = ProductLine({
        name: item?.name,
        price: item?.price,
        id: index+1,
        editIdState
    });

    elements.productList.querySelector('tbody').innerHTML += tr;
});

/*
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

    let trNode = "";
    let tr;
    let isSave = true;

    if((typeof formIndex === 'number' || formIndex) && products[formIndex]) {
        products[formIndex] = product;
        trNode = document.querySelector(`[data-editindex="${formIndex}"]`).parentNode.parentNode
        trNode.innerHTML = '';
        editLink.dataset.editindex = formIndex;
        isSave = false;
    } else {
        
        tr = ProductLine({
            name: product?.name,
            price: product?.price,
            id: products.length+1
        });

        products.push(product);
    }

    storage.setProducts(products);

    if(isSave) {
        elements.productList.querySelector('tbody').innerHTML += tr;
    }

    elements.formMsg.classList.add('show');
    elements.formProdutos.reset();

    setTimeout(() => {
        elements.formMsg.classList.remove('show');
    }, 2000);
    
});*/






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