<script>
import Rating from './Rating.vue';
    export default{
    props: {
        product: Object,
        isCheapest: Boolean,
    },
    computed: {
      truncateDescription(){
        if (this.product.description.length <= 120) { return this.product.description; }
        const subString = this.product.description.slice(0, 119);
        return subString.slice(0, subString.lastIndexOf(" ")) + " [&hellip;]" + "</p>";
      },
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
        Prix: {{ product.unit_price }} €
      </div>
      <div class="rating">
        avis moyen: <Rating :note="product.rating"></Rating>
      </div>
      <hr>
      <div v-html="truncateDescription"></div>

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
    min-width: 20%;
  }
  hr{
    width: 80%;
    margin: 1em auto;
  }
  .product-link{
    color: white;
    width: 100%;
  }
</style>