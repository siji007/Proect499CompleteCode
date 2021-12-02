<template>
  <div id="app">
      
      <input type="checkbox" id="check">
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>

      <div class="sidebar pr-3">
        <header class="mt-12 text-center font-bold">Cooperate Pay</header>
        <ul>
          <li class=""><a href="">Dashboard</a></li>
          <router-link to="/manage" tag="li"><a href="">Manage</a></router-link>
          <li><a href="">Messages</a></li>
          <li><a href="">Reports</a></li>
        </ul>
      </div>

      <section class="pr-5">
        <!-- <div class="" style="">
          <input id="textInput" type="text" class="w-50 rounded py-1 bg-grey border border-info">

          <div class="float-right  flex flex-initial flex-nowrap">
          <p class="mr-3" id="notification"><i  class="fas fa-bell-on "></i></p>
          
          <div class="bg-success mr-3" id="avatar">

          </div>
          <p id="adminText" class="float-right ">Admin</p>
          </div>
        </div> -->
        <div class="flex">
          <input id="textInput" type="text" class="w-50  rounded py-1 bg-grey border border-info">
          <div class=" ml-auto  flex flex-initial flex-nowrap">
          <p class="mr-3" id="notification"><i  class="fas fa-bell-on "></i></p>
          
          <div class="bg-success mr-3" id="avatar">

          </div>
          <p id="adminText" class="float-right ">Admin</p>
          </div>
          
        </div>

        <div class="" id="showRoute">
          <router-view></router-view>
        </div>

      </section>
  </div>
</template>
<style  scoped>
li{
  list-style: none;
  text-decoration: none;
}
.sidebar{
  top: 0px;
  z-index: 1;
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: rgb(92, 13, 165);
  transition: all .5s ease;
}
.sidebar header{
  /* font-size: 28px; */
  color: white;
  margin-bottom: 30px;
}
.sidebar ul a{
  display: block;
  line-height: 79px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: white;
  transition: .4s;
}
ul li:hover a{
  padding-left: 50px;
}
label #btn, label #cancel{
  position: absolute;
  cursor: pointer;
}
label #btn{
  left: 40px;
  top: 32px;
  color: red;
  font-size: 35px;
  /* padding: 6px 12px; */
  transition: all .5s;
}
label #cancel{
  left: -195px;
  top: 32px;
  font-size: 60px;
  z-index: 1111;
  padding: 4px;
  color:red;
  padding: 4px 9px;
}
#check{
  display: none;
}
#check:checked ~ .sidebar{
  left: 0;
}
#check:checked ~ label #btn{
  left: 250px;
  opacity: 0;
  pointer-events: none;
}
#check:checked ~ label #cancel{
  left: 195px;
}
section{
  height: 100%;
  margin-left: 90px;
}
#textInput{
  margin-top: 11px;
  border: none;
}
#textInput:focus{
  outline: none;
}
#notification{
  margin-top: 11px;
}
/* img{
  border-radius: 50%;
  width: 70px;
} */
#avatar{
  border-radius: 30%;
  margin-top: 11px;
  width: 50px;
}
#adminText{
  margin-top: 11px;
}
#showRoute{
  margin-top:80px
}


</style>