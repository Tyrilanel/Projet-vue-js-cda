<script>
    import { useUserStore } from '@/stores/user';
    import { mapActions, mapState } from 'pinia';
    export default {
        data () {
            return {
                pseudo: '',
                password: '',
                isLoading: false,
            }
        },

        computed: {
            ...mapState(useUserStore, ['error']),
        },
        methods: {
            ...mapActions(useUserStore, ['login', 'fetchUser', 'resetError']),

            async loginHandler() {
                this.isLoading = true;
                this.resetError();

                await this.login(this.pseudo, this.password)
                if (this.error == ""){
                    this.$router.push('/');
                }

                this.isLoading = false;
            }
        }
    }
</script>
<template>
    <form action="" method="post" @submit.prevent="loginHandler">
        <div>
            <label for="pseudo">Nom d'utilisateur</label>
            <input type="text" name="pseudo" id="pseudo" v-model="pseudo">
        </div>
        <div>
            <label for="password">mdp</label>
            <input type="password" name="password" id="password" v-model="password">
        </div>
        <span id="error">{{ error }}</span>
        <input type="submit" value="Se connecter">
    </form>
</template>
<style scoped>
    .error {
        text-align: center;
    }
    form {
        max-width: 80%;
    }
</style>