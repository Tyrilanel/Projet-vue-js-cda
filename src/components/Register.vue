<script>
  import { useUserStore } from '@/stores/user';
  import { mapActions } from 'pinia';
  export default {
      data() {
        return {
          firstName: "Gordon",
          lastName: "Freeman",
          email: "G.freeman@Black-messa.com",
          pseudo: "The Freeman",
          password: "Secret",
          confirmed: false,
          passwordConfirm: "",
          error: "",
        }
      },
      methods: {
        ...mapActions(useUserStore, ['register']),

        handleSubmit(){
          if(this.confirmed){
            this.register(this.firstName, this.lastName, this.email, this.pseudo);
            this.$router.push({name: 'home'});
          }
        },

        checkPassword(){
          const condition = this.password != "" && this.password != this.passwordConfirm;
          if(condition){
            this.error = 'Le mot de passe et la confirmation du mot de passe ne concordent pas.';
            this.confirmed = false;
          }else{
            this.error = "";
            this.confirmed = true;
          }
        }
      }
    }

</script>

<template>

  <form action="" method="get" name="the-form" id="the-Form" @submit.prevent="this.handleSubmit">
    <div>
      <label for="firstName">prenom</label>
      <input type="text" name="firstName" id="firstName" v-model="firstName">
    </div>
    <div>
      <label for="lastName">nom</label>
      <input type="text" name="lastName" id="lastName" v-model="lastName">
    </div>
    <div>
      <label for="email">adresse email</label>
      <input type="email" name="email" id="email" v-model="email">
    </div>
    <div>
      <label for="pseudo">pseudo</label>
      <input type="text" name="pseudo" id="pseudo" v-model="pseudo">
    </div>
    <span class="error">{{ error }}</span>
    <div>
      <label for="password">mdp</label>
      <input type="password" name="password" id="password" v-model.lazy="password" @change="checkPassword">
    </div>
    <div>
      <label for="confirm">confirmer mdp</label>
      <input type="password" name="confirm" id="confirm" v-model="passwordConfirm" @input="checkPassword">
    </div>
    <input type="submit" :disabled="!confirmed" value="Inscription">
  </form>

</template>

<style>
  form{
    display: flex;
    flex-direction: column;
    color: white;
    width: 100%;
  }
  form label {
    text-align: left;
    padding-left: 20% ;
    flex-grow: 1;
  }
  form div{
    display: flex;
    justify-content: space-around;
    padding-bottom: 1em;
  }

  textarea, select, input{
    background-color: lightgrey;
    border-radius: 5px;
    border-color: lightgrey;
  }

  form input, select{
    box-shadow: none;
    width : 55%
  }

  input[type="checkbox"]{
    width: auto;
    accent-color: #fb7e14;
    padding: 10px;
  }

  .error{
    align-self: center;
    background-color: #fb7e14;
    color: #000000;
    font-size: 13px;
    margin-bottom: 0.5em;
    margin-top: 1.5em;
  }
</style>