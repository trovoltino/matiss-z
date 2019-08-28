<template>
  <div id="app">
    <img class="bg" src="@/assets/images/bg-img-optimized.jpg" alt="earth">
    <router-view/>
    <Head/>
    <div class="logo">
      <!--<img class="m-logo" ref="logo" src="@/assets/images/main-logo.svg" alt="matiss-logo" width="200px" height="200px">-->
      <p class="m">MZ</p>
    </div>
  </div>
</template>

<script>

import Head from './components/layouts/head.vue';

export default {
  name:"app",
  components: {
    'Head': Head
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  max-height: 100vh;
  overflow: hidden;
  font-family: Verdana;
}
.bg {
  max-width: 100%;
  min-height: 100vh;
  z-index: -5;
}
.m {
  position: absolute;
  bottom: 0%;
  left: 50%;
  font-family: 'Courgette', cursive;
  font-size: 3.5em;
  color: white;
  text-shadow: 0px 0px 11px rgb(228, 228, 228),
                0px 0px 11px rgb(228, 228, 228);
  transform: translate(-50%, 0%);
}
@media screen and (max-height: 670px) {
  .m {
    margin: -10px;
  }
}
@media screen and (max-width: 1092px) {
  p {
    margin: 5px;
  }
  .m {
    font-size: 2.5em;
  }
}
@media screen and (max-width: 400px) {
  p {
    margin: 5px;
  }
  .m {
    display: none;
  }
}

</style>
