<script>
    export default {
        props: {
            note: Number,
        },
        data(){
            return {
                totalStars: 5,
            }
        },        
    }
</script>

<template>
    <div class="stars">
        <span v-for="n in this.totalStars">
            <span v-if="note-n >= 0" >
                <slot name="full">
                    <span class="fa fa-star"></span>
                </slot>
            </span>
            <span v-else-if="note-n > -1" >
                <slot name="half">
                    <span class="fa fa-star-half-o"></span>
                </slot>
            </span>
            <span v-else>
                <slot name="empty">
                    <span class="fa fa-star-o" ></span>
    
                </slot>
            </span>
        </span>
    </div>

</template>

<style>
    .fa-star, .fa-star-half-o, .fa-star-o{
        color: #fb7e14 !important;
    }
    
</style>