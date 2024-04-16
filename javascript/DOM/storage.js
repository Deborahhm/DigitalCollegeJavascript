
export default {
    setItem: function(key, value) {
        
        if(typeof value === 'object') {
            value = JSON.stringify(value);
        }

        window.localStorage.setItem(key, value);
    },

    getItem: function(key) {
        let value = window.localStorage.getItem(key);
        
        try {
            value = JSON.parse(value) ?? [];
        } catch (error) {}

        return value;
    },

    setProducts: function(data) {
        return this.setItem('products', data);
    },

    getProducts: function() {
        let products = this.getItem('products');
        return Array.isArray(products) ? products : [];
    }
}