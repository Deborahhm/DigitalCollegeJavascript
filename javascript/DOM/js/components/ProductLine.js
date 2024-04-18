
import { useEvent } from '../hooks.js';

export default function ProductLine(props) {
    
    let deleteLink = useEvent(function deleteLink() {
        alert("Deu bom!");
    });
    
    return `
        <tr>
            <td>${props.id}</td>
            <td>${props.name}</td>
            <td>${props.price}</td>
            <td>
                <button data-editindex="${props.id}">Editar</button>
                <button data-index="${props.id}" onclick="${deleteLink}">Excluir</button>
            </td>
        </tr>
    `;
}