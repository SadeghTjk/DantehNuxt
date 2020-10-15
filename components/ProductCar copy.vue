<template>
<div class="shadow-sm dantew-car">
    <h5 class="car-title">پربازدید ترین محصولات</h5>
    <hr>

<client-only>
     
    <facebook-loader v-if="!ready" :speed="1"></facebook-loader>
    <carousel v-else :per-page="5" :navigationEnabled="true" :paginationEnabled="false" :spacePadding="4">
    <slide v-for="product in productList" :key="product.id" class="product-slide" :data-index="product.id" :data-name="product.get('productName')" @slideclick="handleSlideClick">
      <ProductCard :imgUrl="product.get('img').url()" :available="product.get('isAvailable')" :pTitle="product.get('productName')" :price="product.get('price')"/>
    </slide>
  </carousel>
</client-only>

</div>
</template>

<script>
var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');
import {ContentLoader,FacebookLoader} from 'vue-content-loader'
  export default {
    data() {
      return {
        ready: false,
        productList: null,
      }
    },
    components: {
        ContentLoader,FacebookLoader
    },
    methods: {
        handleSlideClick (dataset) {
            console.log(dataset.index, dataset.name);
            this.$router.push('/products/'+dataset.name);
        },
        async getProductList(){
            const Products = Parse.Object.extend("Product");
            const query = new Parse.Query(Products);
            query.limit(10);
            this.productList = await query.find().then(this.ready=true)
        } 
    },
    beforeMount() {
        this.getProductList();
        
    },
  }
</script>

<style scoped>
    .dantew-car{

        padding: 10px;
        text-align: right;
        border-radius: 8px;
        margin-top: 20px;
        border: 1px solid #7e7e7e21;
    }
    .product-slide{
        padding-right: 8px;
    }
</style>