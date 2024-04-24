
export default function InputGroup(props) {
    
    return `
        <div>
            <label>${props.label}</label>
            <br>
            <input id="${props.id}"  value="${props.value}" oninput="${props.onChange}(event)" type="${props.inputType}">
        </div>
    `;
}