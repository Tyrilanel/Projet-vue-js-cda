<script>
import CartLine from './CartLine.vue';
import { useCartStore } from '@/stores/cart';
import { mapWritableState, mapActions } from 'pinia';

    export default{
        computed:{
            ...mapWritableState(useCartStore, ['cart', 'totalPrice', 'taxedPrice'] ),


        },

        methods:{
            ...mapActions(useCartStore, ['deleteArticle', 'clearCart']),
        },

        components: { CartLine }
    }
</script>

<template>
    <div v-if="cart">
		<h1>Panier</h1>
        <table id="cart">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix U</th>
                    <th>Quantité</th>
                    <th>Total HT</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="article in cart" :key="article.id">
                    <CartLine v-if="article.quantity > 0" v-model:product_id="article.id" v-model:product_name="article.name" v-model:product_price="article.unit_price" v-model:product_quantity="article.quantity" @delete="deleteArticle"/>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">Total: </td>
                    <td>{{ totalPrice.toFixed(2) }} €</td>
                </tr>
                <tr>
                    <td colspan="4">Total TTC: </td>
                    <td>{{ taxedPrice.toFixed(2) }} €</td>
                </tr>
            </tfoot>
        </table>
        <section class="button-group">
            <button id="clear" @click="clearCart">Vider le pannier</button>
            <button id="order">Commander</button>
        </section>
	</div>
</template>

<style scoped>
   table {
       width: 100%;
   }
    tfoot td{
        border-top: 2px solid #FFFFFF;
        text-align: center;
    }

    .button-group{
        display: flex;
    }

    button {
        width: 100px;
        height: 30px;
        justify-content: center;
    }

    
</style>