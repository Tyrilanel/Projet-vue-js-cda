<script>
    export default {
        props: {
            product_id: {
                type: Number,
                required: true,
            },
            product_name:{
                type: String,
                required: true,
            },
            product_quantity:{
                type: Number,
                required: true,
            },
            product_price:{
                type: Number,
                required: true,
            }
        },
        emits: ['update:product_quantity', 'delete'],
        computed:{
            total_price() {
                return (this.product_price * this.product_quantity).toFixed(2);
            }
        },
        methods: {
            suppressionRequest(){
                this.$emit('delete', this.product_id);
            }
        }

    }
</script>
<template>
    <td>{{ product_name }}</td>
    <td class="unit_price">
        <span class="value">{{ product_price }}</span> €
    </td>
    <td class="quantity">
        <input type="number" class="influent-price-on-change" :value="product_quantity" @input="$emit('update:product_quantity', parseInt($event.target.value))"/>
    </td>
    <td class="total_price">{{ total_price }} €</td>
    <td>
        <button @click="suppressionRequest">X</button>
    </td>
</template>
<style scoped>
    button{
        justify-content: center;
    }

    input{
        max-width: 4rem;
        height: 24px;
        background-color: #5a5a5a;

        color: white;
        padding: 4px;
        font-size: 12px;

        border-left: 1px solid #343434;
        border-top: 1px solid #343434;
        border-right: 1px solid #b7b7b7;
        border-bottom: 1px solid #b7b7b7;

        border-radius: 0%;

        outline: none;
    }
</style>