<template>
    <div class="single">
      {{$route.params.slug}}
      <hr>
      {{product}}
    </div>
</template>
<script>
var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');
export default {
  data() {
    return {
        ready: false,
        product: null,
    }
  },
  methods: {
    async getProductList(){
            const Products = Parse.Object.extend("Product");
            const query = new Parse.Query(Products);
            query.equalTo("productName",this.$route.params.slug)
            this.product = await query.first();
            
              if (this.product != null && this.product.length != 0) {
                console.log(this.product.get('price'));
              }
              else{
                return this.$nuxt.error({ statusCode: 404, message: 'err.message' })
              }
        }
  },
  created() {
    this.getProductList();
  },
  async validate({params}) {

          return true

      
  }
}
</script>