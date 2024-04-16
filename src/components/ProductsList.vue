<script>
    import { useProductsStore } from "@/stores/products";
    import { mapState } from 'pinia';
    import Product from "./Product.vue";
    export default{
        computed: {
            ...mapState(useProductsStore, ['productsList']),
            cheaperProductPrice() {
                return this.productsList.toSorted(function (a, b) {
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
        <h2>Nombre de produits: {{ this.productsList.length}}</h2>
        <div v-for="product in this.productsList" :key="product.id" class="product">
            <Product :product="product" :isCheapest="product.unit_price === cheaperProductPrice"></Product>
        </div>
    </div>
</template>

<style>
    .product{
        display: flex;
    }
</style>