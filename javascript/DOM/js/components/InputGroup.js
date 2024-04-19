
export default function InputGroup(props) {
    
    return `
        <div>
            <label>${props.label}</label>
            <br>
            <input type="${props.inputType}">  
        </div>
    `;
}