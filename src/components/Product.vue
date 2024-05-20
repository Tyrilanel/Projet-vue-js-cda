<script>
import Rating from './Rating.vue';
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cart';
    export default{
    props: {
        product: Object,
    },
    computed: {
      truncateDescription(){
        if (this.product.description.length <= 120) { return this.product.description; }
        const subString = this.product.description.slice(0, 119);
        return subString.slice(0, subString.lastIndexOf(" ")) + " [&hellip;]" + "</p>";
      },
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart']),
    },
    components: { Rating }
}
</script>

<template>
  <router-link class="product-link" :to="{name:'produit', params: {id: product.id}}">

      <div class="product-name">
        {{ product.name }}
      </div>
      <div class="price">
        Prix: {{ product.unit_price }} €
      </div>
      <div class="rating">
        avis moyen: <Rating :note="product.rating"></Rating>
      </div>
      <hr>
      <div v-html="truncateDescription"></div>
      <button class="add-to-cart" @click.prevent="addToCart(product.id, product.name, product.unit_price)">+</button>

  </router-link>
  </template>

<style scoped>

  button.add-to-cart{
    width: 30px;
    height: 30px;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
    margin-bottom: 0;
  }

  .product-name{
    flex: auto;
  }
  .price{
    min-width: 20%;
  }
  hr{
    width: 80%;
    margin: 1em auto;
  }
  .product-link{
    color: white;
    width: 100%;
    position: relative;
  }
</style>