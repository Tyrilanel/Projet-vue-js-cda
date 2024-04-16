import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
    }),
    
    getters: {
        totalPrice () {
            let total = 0;
            this.cart.forEach((cartLine) => {
                total += parseInt(cartLine.unit_price) * parseInt(cartLine.quantity);
            });
            return total;
        },
        taxedPrice () {
            return this.totalPrice * 1.2;
        },
        productsCount () {
            let productsCount = 0;
            this.cart.forEach((cartLine) => {
                productsCount += parseInt(cartLine.quantity);
            });
            return productsCount;
        }
    },

    actions:{
        addToCart(id, name, price) {
            const index = this.cart.findIndex((element) => element.id == id);
            if (index == -1) {
                this.cart.push({"id":id, "name": name, "quantity": 1, "unit_price": price})
            } else {
                this.cart[index].quantity++
            }
        },
        async fetchCart() { 
            try {
                const response = await fetch("/cart.json");
                this.cart = await response.json();
            } catch (error) {
                console.log(error);
            } 
        },
        deleteArticle(id_product){
            const index = this.cart.findIndex((element) => element.id == id_product);
            this.cart.splice(index, 1);
        }
    }
})