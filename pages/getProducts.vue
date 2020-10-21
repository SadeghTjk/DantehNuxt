<template>
    <div class="row rtl p-5">
      <div class="col-sm-12">
        <b-form @submit.prevent="getall" >

          <b-form-group id="input-group-13" label="آدرس اصلی: " label-for="input-base">
            <b-form-input id="input-base" type="url" required placeholder="آدرس اصلی سایت" v-model="base"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="آدرس: " label-for="input-url">
            <b-form-input id="input-url" type="url" required placeholder="آدرس گروه محصول" v-model="url"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="پیجینگ: " label-for="input-page">
            <b-form-input id="input-page" type="text" placeholder="مثال پیجینگ" v-model="paging"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-14" label="تعداد صفحات: " label-for="input-pageNum">
            <b-form-input id="input-pageNum" type="number" placeholder="تعداد صفحات گروه محصول" v-model="pageNum"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-8" label="باکس محصول: " label-for="input-box">
            <b-form-input id="input-box" type="text" placeholder="سلکتور محصول" v-model="box"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="عنوان فارسی: " label-for="input-title-fa">
            <b-form-input id="input-title-fa" type="text" placeholder="سلکتور عنوان فارسی" v-model="titleFa"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="عنوان انگلیسی: " label-for="input-title-en">
            <b-form-input id="input-title-en" type="text" placeholder="سلکتور عنوان انگلیسی" v-model="titleEn"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="قیمت: " label-for="input-price">
            <b-form-input id="input-price" type="text" placeholder="سلکتور قیمت" v-model="price"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-9" label="قیمت قبلی: " label-for="input-oldprice">
            <b-form-input id="input-oldprice" type="text" placeholder="سلکتور قیمت قبلی" v-model="oldPrice"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="موجودی: " label-for="input-stock">
            <b-form-input id="input-stock" type="text" placeholder="سلکتور موجودی" v-model="stock"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-10" label="کلمه ناموجود: " label-for="input-outof">
            <b-form-input id="input-outof" type="text" placeholder="کلمه ناموجود" v-model="outof"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-11" label="عکس: " label-for="input-image">
            <b-form-input id="input-image" type="text" placeholder="سلکتور عکس" v-model="image"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-12" label="اتربیوت عکس: " label-for="input-att">
            <b-form-input id="input-att" type="text" placeholder="اتربیوت عکس" v-model="att"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="دسته بندی: " label-for="input-cat">
            <b-form-input id="input-cat" type="text" placeholder="سلکتور دسته بندی" v-model="cat"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-7" label="برند: " label-for="input-brand">
            <b-form-input id="input-brand" type="text" placeholder="سلکتور برند" v-model="brand"></b-form-input>
          </b-form-group>

        <b-btn variant="success" id="all" type="submit" class="m-2 mb-4 px-4">دریـــافت</b-btn>
        <b-btn variant="danger" id="delete" @click="del" class="m-2 mb-4 px-3">حـــذف</b-btn>
        
        </b-form>
        <!-- <button id="parse" type="submit" @click="update" class="mb-3">شروع</button> -->
        <b-progress class="mb-3" :value="100" variant="info" striped animated v-show="loading"></b-progress>
          <span class="product-container" v-for="(product,index) in productList" :key="index">
            <b-alert v-b-toggle.accordion v-if="product.stock == 'OutOfStock'" variant="success" show>
              <b-avatar rounded="sm" :src="'https://sell.ir'+product.image"></b-avatar>
              {{ product.title_fa }} <br>
              قیمت: {{product.oldPrice}} |
              دسته بندی: {{ product.cat }}

            </b-alert>

            <b-alert v-b-toggle v-else variant="danger" show>
              <b-avatar rounded="sm" :src="'https://sell.ir'+product.image"></b-avatar>
              {{ product.title_fa }} <br>
              قیمت: {{product.oldPrice}} |
              دسته بندی: {{ product.cat }}

            </b-alert>
            <b-collapse accordion="my-accordion" id="accordion" class="mb-2">
              <b-card>
                <p class="card-text">{{ product.title_en }}</p>
                <p class="card-text">{{ product.brand }}</p>
                <p class="card-text">{{ product.stock }}</p>
              </b-card>
            </b-collapse>
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
      visible: false,
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
      productList: [],
      url: 'https://sell.ir/products-10/%DB%8C%D8%AE%DA%86%D8%A7%D9%84-%D9%81%D8%B1%DB%8C%D8%B2%D8%B1?page=',paging: '',box: '.product-box a',titleFa: 'h1.text-center-xs',titleEn: 'h2.text-center-xs',price: 'span.price-value',oldPrice: 'span.price-value',stock: '.inner-btn.btn-basket span',cat: 'ol.breadcrumb li:nth-child(5)',brand: '.star-gray a',base:'https://sell.ir', att:'src',image:'.product-main-image img',outof:'', pageNum: 2,
      text: '',
    }
  },
  methods: {
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

      this.text = "url=" + this.url + "&page=" + this.pageNum + "&box=" + this.box + "&titleFa=" + this.titleFa + "&titleEn=" + this.titleEn + "&price=" + this.price +
        "&base=" + this.base + "&oldPrice=" + this.oldPrice + "&image=" + this.image + "&att=" + this.att + "&brand=" + this.brand + "&cat=" + this.cat +
        "&stock=" + this.stock + "&outof=ناموجود" + "&paging=" + this.paging;
      await this.$axios.get('http://localhost:8000?' + this.text).then(res => {
          this.productList = res.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });


    },
    del(){
      this.productList = {}
    }
  },

}
</script>

<style scoped>

</style>