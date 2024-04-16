<script setup>

import { useUserStore } from '@/stores/user';

const user = useUserStore();

defineProps({
  msg: {
    type: String,
    default: "Heck it!"
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 v-if="user.userLastName">
      Bienvenue dans la boutique secrète de Black Mesa <span class="green">Dr.{{ user.userLastName }}</span>.
    </h3>
    <h3 v-else>Bienvenue dans la boutique secrète de Black Mesa</h3>
    <p>Ici nous vous proposons des produits exotiques venant tout droit de nos laboratoires.
       Tous sont manufacturés par nos équipes expertes, ou  proviennent d'un des mondes que nous sommes parvenus à explorer, grâce à notre technologie de téléportation, bien suppérieure à ce que peut proposer Apperture Sciences.</p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 1em;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
