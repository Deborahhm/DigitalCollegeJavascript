
import Form from './Form.js';
import InputGroup from './InputGroup.js';


export default function FormProduct(props) {

    return Form({
        action: "htts://site.com/novo-produto",
        method: "POST",
        children: [
            InputGroup({label: "Nome", inputType: "text"}),
            InputGroup({label: "Preço", inputType: "number"}),
        ]
    });
}