<template>
  <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-sm-12 col-lg-9  rtl product-lists">
          <NavTable />
          <ProductSection />
          <Banners />
          <ProductCar />
        </div>

        <div class="col-lg-3">
            <div class=" m-1">
              <img class="banner banner-img mb-3" src="@/assets/janebi.webp" alt="هدفون"  title="خرید هدفون"/>
              <img class="banner banner-img mb-3" src="@/assets/charger.webp" alt="هدفون"  title="خرید هدفون"/>
              <img class="banner banner-img mb-3" src="@/assets/phone.webp" alt="هدفون"  title="خرید هدفون"/>
              <img class="banner banner-img mb-3" src="@/assets/console.webp" alt="هدفون"  title="خرید هدفون"/>
              <img class="banner banner-img mb-3" src="@/assets/headphone.webp" alt="هدفون"  title="خرید هدفون"/>
            </div>
        </div>
      </div>
      <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.banner {
  border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
}
.banner-img{
      width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
}

</style>