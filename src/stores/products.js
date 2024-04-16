import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        productsList: []
    }),
    
    getters: {

    },

    actions:{
        async fetchProducts() {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                this.productsList = data.products;
            } catch (error) {
                console.log(error);
            }
        },

        getProduct(id) {
            return this.productsList.find((product) => product.id == id);
        }
    }
})