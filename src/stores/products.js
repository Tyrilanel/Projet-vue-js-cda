import ProductsList from "@/components/ProductsList.vue";
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
                this.productsList = await response.json();
            } catch (error) {
                console.log(error);
            }
        }
    }
})