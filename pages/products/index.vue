<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
// fetch the products
const {data: products} = await useFetch('https://fakestoreapi.com/products');

useHead({
    title: "Practice App || Merch",
    meta:[
        {name:'description',content:'Practice App Merch'}
    ]
})
</script>

<style scoped>

</style>