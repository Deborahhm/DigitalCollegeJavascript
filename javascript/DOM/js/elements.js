
export default {
    inputNameError: document.getElementById('input-name-error'),
    inputPriceError: document.getElementById('input-price-error'),
    formMsg: document.getElementById('form-msg'),
    productList: document.getElementById('product-list'),

    formProducts: function (attributeValue) {
        let form = document.getElementById('form-products');
        if(!attributeValue && parseInt(attributeValue) !== 0) {
            return form;
        }
        alert(attributeValue);
        form.dataset.formediting = attributeValue;
    },
    
    inputName: function (value) {
        let input = document.getElementById('input-name')
        if(!value) {
            return input
        }
        input.value = value 
    },
    inputPrice: function (value) {
        let input = document.getElementById('input-price')
        if(!value) {
            return input
        }
        input.value = value 
    }
}