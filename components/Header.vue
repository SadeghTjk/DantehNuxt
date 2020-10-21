<template>

  <div class="container-fluid header sticky-top bg-white border-bottom shadow">
    <div class="row">

      <div class="col-2 logo align-self-center">
        <img src="@/assets/ask.png" alt="" class="nav-link logo-ask">
      </div>

      <div class="col-8 search ">
        <div class="search-box"><input type="text" placeholder=" " /><span></span></div>
      </div>

      <div class="col-2 menu rtl">
        <ul class="nav naver">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="navigation" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              منوی کاربری
            </a>
            <div class="dropdown-menu shadow-sm" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">پنل مدیریت</a>
              <nuxt-link class="dropdown-item" to="/getProducts">پنل بروزرسانی</nuxt-link>
              <nuxt-link class="dropdown-item" to="/getApi">پنل API</nuxt-link>
              <div class="dropdown-divider" />
              <a class="dropdown-item" href="#">ویرایش پروفایل</a>
              <a class="dropdown-item" href="#">خروج</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div
      class="sub-header d-flex flex-column flex-md-row align-items-center mb-2 bg-white ">
      <ul class="nav cats">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">کالای دیجیتال</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/test">لوازم خانگی</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/beauty">سلامت و زیبایی</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/supermarket">سوپرمارکت</nuxt-link>
        </li>
      </ul>
    </div> -->
    <nav class="sub-header navbar navbar-expand-lg">
  <b-button class="px-3 ml-5" variant="danger" to="/submit-shop" size="sm">ثبت فروشگاه</b-button>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse rtl" id="main_nav">

  <ul class="navbar-nav">

    <li class="nav-item dropdown" v-for="(cat,id) in cats" :key="id">
        <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  {{cat}}  </a>
        <ul class="dropdown-menu fade-down">
        <li><a class="dropdown-item" href="#"> موبایل</a></li>
        <li><a class="dropdown-item" href="#"> تبلت </a></li>
        <li><a class="dropdown-item" href="#"> کامپیوتر </a></li>
        </ul>
    </li>
  </ul>
      
    </div>

</nav>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          cats : ['کالای دیجیتال','لوازم خانگی','سلامت و زیبایی','سوپرمارکت','دکوراسیون اداری','حیوانات خانگی','ابزار و تجهیزات','ماشین های اداری','ورزش و سرگرمی','سوپر مارکت',]
        }
      },
  }

</script>

<style scoped>
  .header {
    font-family: "IranYekan";
    font-weight: 400;
  }
  .logo {
    top: 5px;
  }
  .row{
    flex-wrap: unset !important;
    height: 90px;
  }
  ul {
    font-size: 14px;
  }
  .nav-item{
    font-size: 13px !important;
  }
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0px;
    vertical-align: 0em;
    content: "";
    font-family: FontAwesome;
    font-weight: 900;
    content: "\f078";
     border: 0;
  }
  .rtl .navbar-nav .nav-item + .nav-item, [dir="rtl"] .navbar-nav .nav-item + .nav-item {
    margin-right: inherit;
    margin-left: .1rem;
}

/* ============ only desktop view ============ */
@media all and (min-width: 992px) {
	.navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
	.navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
	.navbar .dropdown-menu.fade-up{ top:180%;  }
  .navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }

}
/* ============ End desktop view ============ */

  .search {
    justify-content: center !important;
    align-items: center;
    align-self: center;
    text-align: center;
  }

  .search-box {
    border: solid 5px #cd0819;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    font-family: "IranYekan" !important;
    font-weight: 400;
  }

  .search-box input[type="text"] {
    width: 50px;
    height: 50px;
    padding: 5px 40px 5px 10px;
    border: none;
    box-sizing: border-box;
    border-radius: 50px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 0.5) 600ms;
  }

  .search-box input[type="text"]:focus {
    outline: none;
  }

  .search-box input[type="text"]:focus,
  .search-box input[type="text"]:not(:placeholder-shown) {
    width: 600px;
    font-family: "IranYekan";
    text-align: right;
    font-weight: 300;
    font-size: 16px;
    transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
  }

  .search-box input[type="text"]:focus+span,
  .search-box input[type="text"]:not(:placeholder-shown)+span {
    bottom: 13px;
    right: 10px;
    transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
  }

  .search-box input[type="text"]:focus+span:after,
  .search-box input[type="text"]:not(:placeholder-shown)+span:after {
    top: 0;
    right: 10px;
    opacity: 1;
    transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms, opacity 300ms ease 1100ms;
  }

  .search-box span {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -13px;
    right: -15px;
    transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
  }

  .search-box span:before,
  .search-box span:after {
    content: '';
    height: 25px;
    border-left: solid 5px #cd0819;
    position: absolute;
    transform: rotate(-45deg);
  }

  .search-box span:after {
    transform: rotate(45deg);
    opacity: 0;
    top: -20px;
    right: -10px;
    transition: top 300ms ease-out, right 300ms ease-out, opacity 300ms ease-out;
  }

  .naver {
    height: 60px;
    width: 100%;
    margin-right: 24px;
    align-content: center;
    vertical-align: middle;
  }

  .nav-link {
    color: rgb(24, 5, 70);
  }

  .nav-link:hover,
  .nav-link:active,
  .nav-link.nuxt-link-exact-active {
    font-weight: 600;
    color: #d5091a;
  }

  .logow {
    background: transparent;
    position: absolute;
    align-content: center;
    left: 10px;
    top: -56px;
  }

  .cats {
    height: 30px;
    width: 100%;
    align-content: center;
    vertical-align: middle;
    text-decoration: none;
    margin-bottom: 8px;
    margin-right: 24px;
    direction: rtl;
  }

  @media (max-width: 850px) {
    .nav.nav-list {
      display: none;
    }
  }

  /* .dropdown-toggle::after{
    content: "\E0D6\00FE0E";
    position: absolute;
    left: -18px;
    top: 1px;
    font-size: 18px;
    font-size: 1.286rem;
    line-height: 30px;
    vertical-align: middle;
  } */
</style>
