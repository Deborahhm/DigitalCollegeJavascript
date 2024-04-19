
import { useEvent } from '../hooks.js';
import storage from '../storage.js';


let deleteLink = useEvent(function deleteLink(id) {
    storage.deleteProduct(id);
    document.getElementById(`line-${id}`).remove();
});

export default function ProductLine(props) {
    
    return `
        <tr id="line-${props.id-1}">
            <td>${props.id}</td>
            <td>${props.name}</td>
            <td>${props.price}</td>
            <td>
                <button data-editindex="${props.id}">Editar</button>
                <button onclick="${deleteLink}(${props.id-1})">Excluir</button>
            </td>
        </tr>
    `;
}