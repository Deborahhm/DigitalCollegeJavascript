

export default function Form(props) {
    
    return `
        <form action="${props.action}" method="${props.method}">
            ${props.children.join('')}
        </form>
    `;
}