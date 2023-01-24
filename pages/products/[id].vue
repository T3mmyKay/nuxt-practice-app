<template>
    <div>
        <Head>
            <Title>Practice App || {{product.title}}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
       <ProductDetail :product="product"/>
    </div>
</template>

<script setup>
import ProductDetail from "~/components/ProductDetail.vue";

const {id} = useRoute().params

const uri = `https://fakestoreapi.com/products/${id}`

const {data: product} = await useFetch(uri, {key: id});

if(!product.value){
    throw createError({statusCode:404,statusMessage:"Product not found",fatal:true})
}
definePageMeta({
    layout: 'products',
})
</script>

<style scoped>

</style>