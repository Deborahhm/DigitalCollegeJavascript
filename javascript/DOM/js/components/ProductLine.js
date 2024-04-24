
import elements from '../elements.js';
import { useEvent } from '../hooks.js';
import storage from '../storage.js';

export default function ProductLine(props) {

    let deleteLink = useEvent(function deleteLink(id) {
        storage.deleteProduct(id);
        document.getElementById(`line-${id}`).remove();
    });

    let editLink = useEvent(function editLink(id) {
        let products = storage.getProducts();
        let product = products[id];
        elements.inputName(product.name);
        elements.inputPrice(product.price);
        props.editIdState(id);
    });

    return `
        <tr id="line-${props.id-1}">
            <td>${props.id}</td>
            <td>${props.name}</td>
            <td>${props.price}</td>
            <td>
                <button onclick="${editLink}(${props.id-1})">Editar</button>
                <button onclick="${deleteLink}(${props.id-1})">Excluir</button>
            </td>
        </tr>
    `;
}