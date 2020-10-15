<template>


<client-only :placeholder="lol">
     
    <facebook-loader v-if="!ready" :speed="1"></facebook-loader>
    <carousel v-else :per-page="5" :navigationEnabled="true" :paginationEnabled="false" :spacePadding="4">
    <slide v-for="product in productList" :key="product.id" class="product-slide" :data-index="product.id" :data-name="product.get('productName')" @slideclick="handleSlideClick">
      <ProductCard :imgUrl="product.get('img').url()" :available="product.get('isAvailable')" :pTitle="product.get('productName')" :price="product.get('price')"/>
    </slide>
  </carousel>
</client-only>

</template>

<script>
var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');
import {ContentLoader,FacebookLoader} from 'vue-content-loader'
  export default {
    data() {
      return {
        ready: false,
        productList: null,
        lol: '<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>'
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
    .VueCarousel {
        direction: ltr;
    }
    .product-slide{
        padding-right: 8px;
    }
</style>