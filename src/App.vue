<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Register from './components/Register.vue';
import ProductsList from './components/ProductsList.vue';
import { useCartStore } from './stores/cart.js';
import { useUserStore } from './stores/user';
import { useProductsStore } from './stores/products';

const userCart = useCartStore();
const userStore = useUserStore();
const storeProducts = useProductsStore();

</script>

<template>
  <header>
    <section>
      <img alt="Vue logo" class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Half-Life_lambda_logo.svg/365px-Half-Life_lambda_logo.svg.png" width="125" height="125" />

      <div class="wrapper">
        <h1>Crowbar corp</h1>
      </div>
    </section>
    <audio id="rollover">
	    <source src="/sounds/buttonrollover.wav"></source>
	    Your browser isn't invited for super fun audio time.
    </audio>
    <audio id="buttonclick">
      <source src="/sounds/buttonclickrelease.wav"></source>
    </audio>
    <nav class="list">
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'catalog' }">Nos produits</router-link>
      <router-link v-if="!userStore.userLastName" :to="{name: 'login'}">Se connecter</router-link>
      <router-link v-else :to="{name: 'logout'}">Se deconnecter</router-link>
      <router-link v-if="!userStore.userLastName" :to="{name: 'register'}">Nous rejoindre</router-link>
      <router-link v-if="userCart.cart.length < 1" :to="{name: 'panier'}">Panier</router-link>
      <router-link v-else :to="{name: 'panier'}">Panier ({{ userCart.productsCount }})</router-link>
    </nav>
  </header>
  <div class="wrapper content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > * {
    text-transform: uppercase;
    cursor: pointer;
    text-shadow: 0 0 4px black;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 700;
    transition: opacity 0.1s ease-out;
    user-select: none;
  }

  & > *:hover {
    opacity: 0.75;
  }
}

@media (min-width: 1024px) {

  header {
    margin-right: auto;
    width: 35%;
    align-self: center;
  }

  header section {
    display: flex;
    flex-direction: column;
    place-items: center;
  }

  .logo {
    margin: 0 0 0.5rem 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .content{
    width: 50%;
    max-width: 50%;
    margin-right: auto;
  }

  nav{
    display: flex;
    flex-direction: column;
    margin-left: 1em;
  }
}
</style>
