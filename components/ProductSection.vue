<template>
  <div class="row">
    <div class="col mb-4">
      <div class="mx-auto carousel shadow-sm" style="--space:24px;">
        <div class="px-9 pb-6 pt-4">
          <div class="d-flex mb-3 mb-md-4 align-center">
            <h6 class="font-w-b">پربازدید ترین ها</h6>
          </div>
          <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
        </div>
        <div class="c-box">
          <div class="swiper-items-container">
            <div
              class="carousel_items swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-rtl">
                <div class="swiper-slide swiper-slide-active">

                   <!-- <img class="banner-img" src="@/assets/product-car.jpg" /> -->
                   <ProductCar />

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .product-lists {
    font-family: 'IranYekan';
    font-size: 16px;
  }

  .font-w-b {
    font-weight: 400px;
  }

  .carousel {
    box-shadow: 0 2px 8px rgba(0, 0, 0, .05);

    border-radius: 8px;
    margin: 0 !important;
    margin-bottom: var(--space);
    padding-bottom: 24px;
    
  }
.banner-img{
      width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
}
.swiper-slide{
    width: 100%;
}
.mx-auto.carousel.shadow-sm {
    padding: 0px 30px;
    border-radius: 8px;
    border: 1px solid #dee2e6 !important;
    }
.swiper-slide.swiper-slide-active {
    width: 100%;
}
</style>
