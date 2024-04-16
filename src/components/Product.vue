<script>
import Rating from './Rating.vue';
    export default{
    props: {
        product: Object,
        isCheapest: Boolean,
    },
    components: { Rating }
}
</script>

<template>
  <router-link class="product-link" :to="{name:'produit', params: {id: product.id}}">

      <div class="product-name" :class="{cheap: isCheapest}">
        {{ product.name }}
      </div>
      <div class="price">
        <b>Prix:</b> {{ product.unit_price }} €
      </div>
      <div class="rating">
        <Rating :note="product.rating"></Rating>
      </div>
      

  </router-link>
  </template>

<style scoped>

  .cheap{
    background-color: #fb7e14;
  }
  .product-name{
    flex: auto;
  }
  .price{
    padding-left: 2%;
    min-width: 20%;
  }
  .product-link{
    color: white;
    width: 100%;
  }
</style>