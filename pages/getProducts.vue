<template>
        <div class="row">
            <div class="col-12">
                <button type="submit" @click="update">start</button>
                <progress v-show="loading"></progress>
                <span class="product-container" v-for="(product,index) in result.products" :key="index">
                    <p> {{ product.name }} : {{ product.price }}</p><br>
                    
                </span>
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
            result: {
  "products": [
    {
      "name":"اسکنر کداک Ngenuity 9125DC Color Duplex Scanner",
      "price": "660,000,000 تومان"
    },
    {
      "name":"اسکنر فوجیتسو Document Scanner FI-6670",
      "price": "168,000,000 تومان"
    },
    {
      "name":"اسکنر کداک i1440 Color Duplex Scanner",
      "price": "145,000,000 تومان"
    },
    {
      "name":"فایروال سخت افزاری فورتی نت مدل FortiGate 300E",
      "price": "129,000,000 تومان"
    },
    {
      "name":"کپی توشیبا e-STUDIO 3008a Copier Machine",
      "price": "122,000,000 تومان"
    },
    {
      "name":"لپ تاپ ایسوس ROG Zephyrus S GX701GXR Core i7 32GB 1TB SSD 8GB Full HD Laptop",
      "price": "117,990,000 تومان"
    },
    {
      "name":"پلاتر کانن imagePROGRAF TX-4000 Plotter",
      "price": "85,000,000 تومان"
    },
    {
      "name":"ذخيره ساز تحت شبکه NAS کیو نپ TS-1277-1600-8G 12-Bay Diskless NAS",
      "price": "90,649,000 تومان"
    }
    
    ]
},
            loading: false,
            ready: false,
            aProduct: {},
            loading: false,
        }
    },
    methods: {
        async getProductList(){
            
            
        },
        async update(){
            const query2 = new Parse.Query(Products);
            for (let index = 0; index < 8; index++) {
                //console.log(this.result.products[index].name);
                query.equalTo('productName',this.result.products[index].name);
                //query.contains('productName','لباشوری ال جی مدل 0098');
                this.aProduct = await query.find();
                

                if (this.aProduct[0] == undefined){
                    let product = new Products();
                    product.set("productName",this.result.products[index].name);
                    product.set("price",parseInt(this.result.products[index].price));
                    console.log(product.save());


                }else{
                    //console.log(this.aProduct[0].id);
                    console.log("else : " + this.aProduct[0].id);
                    
                    query2.get(this.aProduct[0].id).then((product)=>{
                        product.set("price",parseInt(this.result.products[index].price));
                        console.log("saved : " + product.save());

                    });


                }
                
                
            }
            
        }
    },
}
</script>

<style scoped>

</style>