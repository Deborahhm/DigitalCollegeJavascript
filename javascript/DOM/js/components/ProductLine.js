

export default function ProductLine(props) {
    return `
        <tr>
            <td>${props.id+1}</td>
            <td>${props.name}</td>
            <td>${props.price}</td>
            <td>
                <a href="" data-editindex="${props.id}">Editar</a>
                <a href="" data-index="${props.id}" onclick="deleteLink">Excluir</a>
            </td>
        </tr>
    `;
}