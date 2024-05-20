<script>
    import { useProductsStore } from "@/stores/products";
    import { mapState } from 'pinia';
    import Product from "./Product.vue";
    export default{
        computed: {
            ...mapState(useProductsStore, ['productsList']),

        },
    components: { Product }
}
</script>

<template>
    <div>
        <h1>Nos Articles</h1>
        <section id="products-list">
            <div v-for="product in this.productsList" :key="product.id" class="product">
                <Product :product="product"></Product>
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
        box-shadow: 0.2em 0.2em 0.5em 0px #5e5d5d53;
        margin-top: 1em;

        &:hover{
            box-shadow: 0.2em 0.2em 0.5em 0px lightgray;
            transform: scale(1.03);
            transition: 0.4s;
        }
    }
</style>