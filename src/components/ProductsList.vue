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
        <section id="products-list">
            <div v-for="product in this.productsList" :key="product.id" class="product">
                <Product :product="product" :isCheapest="product.unit_price === cheaperProductPrice"></Product>
            </div>
        </section>
    </div>
</template>

<style>
    #products-list{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    .product{
        display: flex;
        width: 45%;
        height : 200px;
        border: 1px solid #454545 ;
        margin-top: 1em;
    }
</style>