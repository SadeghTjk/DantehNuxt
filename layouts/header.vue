<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 logo bg-primary">
s
            </div>
            <div class="col-8 search bg-danger">
            <!--    <div class="search-box"><input type="text" placeholder=" " /><span></span></div> -->

                <div id="cover">
                    <form method="get" action="">
                        <div class="tb">
                        <div class="td"><input type="text" placeholder="Search" required></div>
                        <div class="td" id="s-cover">
                            <button type="submit">
                            <div id="s-circle"></div>
                            <span></span>
                            </button>
                        </div>
                        </div>
                    </form>
                </div>

            </div>
            <div class="col-2 menu bg-success">
                3
            </div>
        </div>
    </div>
</template>
<style scoped>
.search{
    justify-content: center !important;
    align-items: center;
    align-self: center;
    text-align: center; 
}
/*******************
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
 .search-box {
	 border: solid 5px black;
	 display: inline-block;
	 position: relative;
	 border-radius: 50px;
}
 .search-box input[type="text"] {
	 font-family: Raleway, sans-serif;
	 font-size: 20px;
	 font-weight: bold;
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
 .search-box input[type="text"]:focus, .search-box input[type="text"]:not(:placeholder-shown) {
	 width: 600px;
	 transition: width 800ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
}
 .search-box input[type="text"]:focus + span, .search-box input[type="text"]:not(:placeholder-shown) + span {
	 bottom: 13px;
	 right: 10px;
	 transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
}
 .search-box input[type="text"]:focus + span:after, .search-box input[type="text"]:not(:placeholder-shown) + span:after {
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
 .search-box span:before, .search-box span:after {
	 content: '';
	 height: 25px;
	 border-left: solid 5px black;
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
 
 */


.tb
{
    display: table;
    width: 100%;
}

.td
{
    display: table-cell;
    vertical-align: middle;
}

input, button
{
    color: #fff;
    font-family: Nunito;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
}

#cover
{
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 550px;
    padding: 35px;
    margin: -0px auto 0 auto;
    background-color: #ff7575;
    border-radius: 20px;
    box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
    transform: scale(0.6);
}

form
{
    height: 96px;
}

input[type="text"]
{
    width: 100%;
    height: 96px;
    font-size: 60px;
    line-height: 1;
}

input[type="text"]::placeholder
{
    color: #e16868;
}

#s-cover
{
    width: 1px;
    padding-left: 35px;
}

button
{
    position: relative;
    display: block;
    width: 84px;
    height: 96px;
    cursor: pointer;
}

#s-circle
{
    position: relative;
    top: -8px;
    left: 0;
    width: 75px;
    height: 75px;
    margin-top: 0;
    border-width: 15px;
    border: 15px solid #fff;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.5s ease all;
}

button span
{
    position: absolute;
    top: 68px;
    left: 43px;
    display: block;
    width: 45px;
    height: 15px;
    background-color: transparent;
    border-radius: 10px;
    transform: rotateZ(52deg);
    transition: 0.5s ease all;
}

button span:before, button span:after
{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 45px;
    height: 15px;
    background-color: #fff;
    border-radius: 10px;
    transform: rotateZ(0);
    transition: 0.5s ease all;
}

#s-cover:hover #s-circle
{
    top: -1px;
    width: 67px;
    height: 15px;
    border-width: 0;
    background-color: #fff;
    border-radius: 20px;
}

#s-cover:hover span
{
    top: 50%;
    left: 56px;
    width: 25px;
    margin-top: -9px;
    transform: rotateZ(0);
}

#s-cover:hover button span:before
{
    bottom: 11px;
    transform: rotateZ(52deg);
}

#s-cover:hover button span:after
{
    bottom: -11px;
    transform: rotateZ(-52deg);
}
#s-cover:hover button span:before, #s-cover:hover button span:after
{
    right: -6px;
    width: 40px;
    background-color: #fff;
}

#ytd-url {
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  margin: 20px;
  color: #fff;
  font-family: Nunito;
  font-size: 14px;
  text-decoration: none;
  background-color: #ff7575;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(255, 117, 117, 0.86);
  z-index: 125;
}
</style>