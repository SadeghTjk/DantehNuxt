<template>
        <div class="row rtl p-5">
            <div class="col-12">
              <button id="delete" type="submit" @click="del" class="mb-3">حذف</button>
                <button id="all" type="submit" @click="getall" class="mb-3">دریافت از آل</button>
                <!-- <button id="parse" type="submit" @click="update" class="mb-3">شروع</button> -->
                <progress v-show="loading"></progress>
                <span class="product-container" v-for="(products,index) in all" :key="index">
                <span class="product-container" v-for="(product,index) in products" :key="index">
                  <b-alert v-if="product.availability == 'instock'" variant="success" show>
                    <b-avatar rounded="sm" :src="product.imageurl"></b-avatar> 
                    {{ product.title1 }} <br>
                    قیمت: {{product.price}} |
                    دسته بندی: {{ product.catname }}

                  </b-alert>
                  <b-alert v-else variant="danger" show>
                    <b-avatar rounded="sm" :src="product.imageurl"></b-avatar> 
                    {{ product.title1 }} <br>
                    قیمت: {{product.price}} |
                    دسته بندی: {{ product.catname }}

                  </b-alert>
                </span>
                </span>
            </div>
        </div>
</template>

<script>
var Parse = typeof window === 'undefined' ? require('parse/node') : require('parse');
const Products = Parse.Object.extend("Product");
const query = new Parse.Query(Products);
export default {
loading: {
    color: 'blue',
    height: '5px'
  },
  data() {
    return {
      result: [{
        "title_fa": "گوشی موبایل اپل مدل  iPhone SE 2020 A2275 ظرفیت 64 گیگابایت",
        "title_en": "Apple iPhone SE 2020 A2275  64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/2d8b2a93deff77b2689b9dd011571aa37a6b0d00_1597481724.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "اپل",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل اپل مدل  iPhone SE 2020 A2275 ظرفیت 64 گیگابایت",
        "title_en": "Apple iPhone SE 2020 A2275  64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/2d8b2a93deff77b2689b9dd011571aa37a6b0d00_1597481724.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "اپل",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل اپل مدل iPhone 11 Pro A2217 دو سیم‌ کارت ظرفیت 256 گیگابایت",
        "title_en": "Apple iPhone 11 Pro A2217 Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113542279.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "اپل",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل اپل مدل iPhone 11 Pro A2217 دو سیم‌ کارت ظرفیت 256 گیگابایت",
        "title_en": "Apple iPhone 11 Pro A2217 Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113542279.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "اپل",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy S20 Plus 5G SM-G986B/DS دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Samsung Galaxy S20 Plus 5G SM-G986B/DS Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/5e77a08742b4dfbc6832c3d9b058635c2fc011ee_1599391974.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy S20 Plus 5G SM-G986B/DS دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Samsung Galaxy S20 Plus 5G SM-G986B/DS Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/5e77a08742b4dfbc6832c3d9b058635c2fc011ee_1599391974.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل موتورولا مدل One Hyper XT2027-3 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Motorola One Hyper XT2027-3 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/af6b81a94434eff6c2915f15031c986c759dcac7_1598877197.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "موتورولا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل موتورولا مدل One Hyper XT2027-3 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Motorola One Hyper XT2027-3 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/af6b81a94434eff6c2915f15031c986c759dcac7_1598877197.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "موتورولا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Redmi Note 9 M2003J15SG دو سیم‌ کارت ظرفیت 64 گیگابایت به همراه 4 گیگابایت رم",
        "title_en": "Redmi Note 9 M2003J15SG Dual SIM 64GB With 4GB Ram Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/f92dfb141480b0800859d266e85063f09f6d3237_1596516036.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Redmi Note 9 M2003J15SG دو سیم‌ کارت ظرفیت 64 گیگابایت به همراه 4 گیگابایت رم",
        "title_en": "Redmi Note 9 M2003J15SG Dual SIM 64GB With 4GB Ram Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/f92dfb141480b0800859d266e85063f09f6d3237_1596516036.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy Note20 SM-N980F/DS دو سیم کارت ظرفیت 256 گیگابایت",
        "title_en": "Samsung Galaxy Note20 SM-N980F/DS Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/1cff518d4afcce11b5db7e0b0568f9303f982f1f_1600769426.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy Note20 SM-N980F/DS دو سیم کارت ظرفیت 256 گیگابایت",
        "title_en": "Samsung Galaxy Note20 SM-N980F/DS Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/1cff518d4afcce11b5db7e0b0568f9303f982f1f_1600769426.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل موتورولا مدل EDGE PLUS XT2061-3 تک سیم کارت ظرفیت 256 گیگابایت",
        "title_en": "Motorola EDGE PLUS XT2061-3 single SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/f6c06601a959aaedfd5eca7b761d84f253bba456_1598953932.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "موتورولا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل موتورولا مدل EDGE PLUS XT2061-3 تک سیم کارت ظرفیت 256 گیگابایت",
        "title_en": "Motorola EDGE PLUS XT2061-3 single SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/f6c06601a959aaedfd5eca7b761d84f253bba456_1598953932.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "موتورولا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Mi Note 10 Lite M2002F4LG دو سیم‌ کارت ظرفیت 128 گیگابایت",
        "title_en": "Xiaomi Mi Note 10 Lite M2002F4LG Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/bff14a6708aa95b13e40909704742ad1bf18f183_1595840589.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Mi Note 10 Lite M2002F4LG دو سیم‌ کارت ظرفیت 128 گیگابایت",
        "title_en": "Xiaomi Mi Note 10 Lite M2002F4LG Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/bff14a6708aa95b13e40909704742ad1bf18f183_1595840589.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Redmi 9 M2004J19G دو سیم‌ کارت ظرفیت 32 گیگابایت",
        "title_en": "Redmi 9 M2004J19G Dual SIM 32GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/dda06bfb7f4df20d01f58bdcdee0d91625c96797_1596431171.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل شیائومی مدل Redmi 9 M2004J19G دو سیم‌ کارت ظرفیت 32 گیگابایت",
        "title_en": "Redmi 9 M2004J19G Dual SIM 32GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/dda06bfb7f4df20d01f58bdcdee0d91625c96797_1596431171.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "شیائومی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy Note 10 Plus N975F/DS دو سیم‌کارت ظرفیت 256 گیگابایت",
        "title_en": "Samsung Galaxy Note 10 Plus N975F/DS Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/112551619.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل سامسونگ مدل Galaxy Note 10 Plus N975F/DS دو سیم‌کارت ظرفیت 256 گیگابایت",
        "title_en": "Samsung Galaxy Note 10 Plus N975F/DS Dual SIM 256GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/112551619.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "سامسونگ",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل آنر مدل 9A MOA-LX9N دو سیم کارت ظرفیت 64 گیگابایت",
        "title_en": "Honor 9A MOA-LX9N Dual SIM 64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/83d1ab359dde100e4a1c7d149aa43ab0e827321f_1597667230.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "آنر",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل آنر مدل 9A MOA-LX9N دو سیم کارت ظرفیت 64 گیگابایت",
        "title_en": "Honor 9A MOA-LX9N Dual SIM 64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/83d1ab359dde100e4a1c7d149aa43ab0e827321f_1597667230.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "آنر",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل دوجی مدل S40 دو سیم کارت ظرفیت 32 گیگابایت",
        "title_en": "Doogee S40 Dual SIM 32GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113451914.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "دوجی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل دوجی مدل S40 دو سیم کارت ظرفیت 32 گیگابایت",
        "title_en": "Doogee S40 Dual SIM 32GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113451914.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "دوجی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل هوآوی مدل Y9 Prime 2019 STK-L21 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Huawei Y9 Prime 2019 STK-L21 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/114612944.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "هوآوی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل هوآوی مدل Y9 Prime 2019 STK-L21 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Huawei Y9 Prime 2019 STK-L21 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/114612944.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "هوآوی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل هوآوی مدل Nova 5T YAL-L21 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Huawei Nova 5T YAL-L21 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/119076806.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "هوآوی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل هوآوی مدل Nova 5T YAL-L21 دو سیم کارت ظرفیت 128 گیگابایت",
        "title_en": "Huawei Nova 5T YAL-L21 Dual SIM 128GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/119076806.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "هوآوی",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS دو سیم‌ کارت",
        "title_en": "Nokia 105 - 2019 TA-1174 DS Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113675589.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS دو سیم‌ کارت",
        "title_en": "Nokia 105 - 2019 TA-1174 DS Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/113675589.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل  5310 TA-1212 DS دو سیم‌ کارت",
        "title_en": "Nokia 5310 TA-1212 DS Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/370c3f68ec238e57aa27178b8a934b5b2035d106_1599286739.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل  5310 TA-1212 DS دو سیم‌ کارت",
        "title_en": "Nokia 5310 TA-1212 DS Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/370c3f68ec238e57aa27178b8a934b5b2035d106_1599286739.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل 150 دو سیم‌ کارت",
        "title_en": "Nokia 150 Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/816958.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل 150 دو سیم‌ کارت",
        "title_en": "Nokia 150 Dual SIM Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/816958.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل Nokia 5.3 TA-1234 DS دو سیم کارت ظرفیت 64 گیگابایت",
        "title_en": "Nokia 5.3 TA-1234 DS Dual SIM 64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/562ccfcb0a0bd3e18def9bd813b1af8e427a9512_1599845583.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }, {
        "title_fa": "گوشی موبایل نوکیا مدل Nokia 5.3 TA-1234 DS دو سیم کارت ظرفیت 64 گیگابایت",
        "title_en": "Nokia 5.3 TA-1234 DS Dual SIM 64GB Mobile Phone",
        "image": "https://dkstatics-public.digikala.com/digikala-products/562ccfcb0a0bd3e18def9bd813b1af8e427a9512_1599845583.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        "cat": "گوشی موبایل",
        "brand": "نوکیا",
        "stock": "OutOfStock"
      }],
      loading: false,
      ready: false,
      aProduct: {},
      loading: false,
      all: [],
      variant: "info",
    }
  },
  methods: {
    async getProductList() {


    },
    async update() {
      const query2 = new Parse.Query(Products);
      for (let index = 0; index < 8; index++) {
        //console.log(this.result.products[index].name);
        query.equalTo('productName', this.result[index].title_fa);
        //query.contains('productName','لباشوری ال جی مدل 0098');
        this.aProduct = await query.find();


        if (this.aProduct[0] == undefined) {
          let product = new Products();
          product.set("productName", this.result.products[index].name);
          product.set("price", parseInt(this.result.products[index].price));
          console.log(product.save());


        } else {
          //console.log(this.aProduct[0].id);
          console.log("else : " + this.aProduct[0].id);

          query2.get(this.aProduct[0].id).then((product) => {
            product.set("price", parseInt(this.result.products[index].price));
            console.log("saved : " + product.save());

          });


        }


      }

    },
    async getall() {
      this.loading = true;
      for(let page=1;page < 18;page++){
        this.all.push((await this.$axios.get('https://www.all.ir/wp-json/askwp/v1/products?p='+ page)).data.products);
        console.log('page number '+ page +' readed!');
        console.log(this.all);

      }
        
      this.loading = false;
    console.log(this.all.length);
  },
    del(){
      this.all = {}
    }
  },

}
</script>

<style scoped>

</style>