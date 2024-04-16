<script>
import Rating from './Rating.vue';
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/stores/cart';
import { useProductsStore } from '@/stores/products';

    export default{

    created() {
        this.$watch(
            () => this.$route.params,
            () => {
                this.getData()
            },
            { immediate: true }
        )
    },
    data () {
        return {
            product: null,
            loading: false,
        }
    },
    props: {
        product_id: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapState(useProductsStore, ['productsList']),  
    },
    methods: {
        ...mapActions(useProductsStore, ['getProduct']),
        async getData() {
            this.loading = true;
            this.product = this.getProduct(this.product_id);
            return this.loading = false;
        },
        ...mapActions(useCartStore, ['addToCart'])
    },
    components: { Rating }
}
</script>
<template>
    <div v-if="loading">
        <img src="/imgs/spinner.svg" alt="image indiquant un chargement">
    </div>
    <main v-if="product && !loading">
        <section class="">
            <img :src="product.img" alt="">
            <section>
                <h2>{{ product.name }}</h2>
                <span v-html="product.description">
                </span>
            </section>
        </section>
        <section class="">
            <Rating :note= "product.rating"></Rating>
            <section class="price">
                {{ product.unit_price }} €
            </section>
            <button @click="addToCart(product.id, product.name, product.unit_price)">Je le veux!</button>
        </section>
        <h2 class="center">Nos autres produits</h2>
        <section id="other-products">
            <div v-for="element in productsList" :key="element.id">
               <router-link v-if="parseInt(element.id) != parseInt(product.id)" :to="{name: 'produit', params: {id: element.id}}">{{ element.name }}</router-link>
            </div>
        </section>    
    </main>
</template>
<style scoped>
 #other-products{
    display: flex;
    justify-content: space-around;
 }

 .price{
    font-size: 32px;
    text-align: end;
 }

 img{
    max-height: 300px;
    max-width: 600px;
 }

 strong{
  font-weight: bold;
  color: #fb7e14;
}

.center{
    text-align: center;
}

button {
  border: 1px solid black;
  border-left-color: #bbbbbb;
  border-top-color: #bbbbbb;
  border-right-color: #454545;
  border-bottom-color: #454545;
  
  background-color: #303030;
  padding: 0 4px;
  user-select: none;

  min-height: 28px;
  min-width: 80px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: white;

  margin: 1em auto 1em auto;

  cursor: pointer;

  &:active:not(.disabled) {
    border-left-color: #454545;
    border-top-color: #454545;
    border-right-color: #bbbbbb;
    border-bottom-color: #bbbbbb;
  }

}  
</style>