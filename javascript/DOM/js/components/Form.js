

export default function Form(props) {
    
    return `
        <form id="${props.id}" onsubmit="${props.onSubmit}(event)" action="${props.action}" method="${props.method}">
            ${props.children.join('')}
        </form>
    `;
}