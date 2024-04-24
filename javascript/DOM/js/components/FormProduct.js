
import { useEvent } from '../hooks.js';
import Form from './Form.js';
import InputGroup from './InputGroup.js';
import ProductLine from './ProductLine.js';
import storage from '../storage.js';
import elements from '../elements.js';
import { createState } from '../state.js';

export default function FormProduct(props) {
    let products = storage.getProducts();

    let inputNameValue = createState();
    let inputPriceValue = createState();

    let onSubmit = useEvent(event => {
        event.preventDefault();

        let editId = parseInt(props.editIdState());

        let product = {
            name: inputNameValue(),
            price: inputPriceValue()
        }

        let tr;

        if((typeof editId === 'number' || editId) && products[editId]) {
            products[editId] = product;
            tr = document.getElementById(`line-${editId}`);
            tr.innerHTML = ProductLine({
                name: product?.name,
                price: product?.price,
                id: editId+1
            });
            
            storage.setProducts(products);
            
            return;
        }
        
        tr = ProductLine({
            name: product?.name,
            price: product?.price,
            id: products.length+1
        });

        products.push(product);
        storage.setProducts(products);
        elements.productList.querySelector('tbody').innerHTML += tr;

    });

    return Form({
        id: 'form-products',
        onSubmit,
        action: "htts://site.com/novo-produto",
        method: "POST",
        children: [
            InputGroup({
                id: 'input-name',
                label: "Nome", 
                inputType: "text",
                onChange: useEvent(event => inputNameValue(event.target.value)) 
            }),
            InputGroup({
                id: 'input-price',
                label: "Preço", 
                inputType: "text", 
                onChange: useEvent(event => inputPriceValue(event.target.value))
            }),
            "<br><button>Cadastrar</button>"
        ]
    });
}