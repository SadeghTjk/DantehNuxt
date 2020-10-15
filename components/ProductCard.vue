<template>

  <b-card
    :title="pTitle"
    :img-src="imgUrl"

    :img-alt="pTitle"
    img-top
    tag="article"
    class="mb-2 product rtl"
    style="direction:rtl;"
  >
    <b-card-text v-if="available == true">
      {{price}} تومان
    </b-card-text>
    <b-card-text v-else style="color:red;">
      ناموجود
    </b-card-text>

    <b-button v-if="available == true" href="#" variant="primary">اضافه به سبد</b-button>
  </b-card>

</template>

<script>
  export default {

    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    },  
    props: ['imgUrl','pTitle','available','oldPrice','price']
  }
</script>

<style scoped>
.product{

    direction: rtl;
    text-align: center;
}
.card {
    border-radius: 8px;
    border: none;
    cursor: pointer;
}
.card-img-top{
    width: 180px;
    align-self: center;
}
.card-title {
    font-size: 0.9rem;
    line-height: 1.5rem;
}
p.card-text {
    font-size: 0.9rem;
    color: darkgreen;
}
</style>