<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <span class="product-container" v-for="(name,index) in result" :key="index">
                    <p>{{ result[0][0] }} : {{ name.index }} : {{ name }}</p><br>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');
const Products = Parse.Object.extend("Product");
const query = new Parse.Query(Products);
export default {
    
    data(){
        return{
            result: {'pepega':'KEKW','lol':'hs'},
            loading: false,
            ready: false,
        }
    },
    methods: {
        async getProductList(){
            this.productList = await query.find().then(this.ready=true)
        },
        async update(){
            if(this.ready == true){

            }
        }
    },
}
</script>

<style scoped>

</style>