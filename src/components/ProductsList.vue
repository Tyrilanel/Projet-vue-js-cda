<script>
    import products from "../assets/products.json";
    import Product from "./Product.vue";
    export default{
    data() {
        return {
            products: products.products
        };
    },
    computed: {
        cheaperProductPrice() {
            return this.products.toSorted(function (a, b) {
                return a.unit_price - b.unit_price;
            })[0].unit_price;
        }
    },
    components: { Product }
}
</script>

<template>
    <div>
        <h1>Nos produits</h1>
        <h2>Nombre de produits: {{ products.length}}</h2>
        <div v-for="product in products" :key="product.id" class="product">
            <Product :product="product" :isCheapest="product.unit_price === cheaperProductPrice"></Product>
        </div>
    </div>
</template>

<style>
    .product{
        display: flex;
    }
</style>