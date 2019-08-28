<template>
  <div class="logo">
      <!--<img class="m-logo" ref="logo" src="@/assets/images/main-logo.svg" alt="matiss-logo" width="200px" height="200px">-->
    <p class="m">MZ</p>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    msg: String
  },
  data() {
    return{}
  }
}
</script>

<style scoped>
p {
  margin: 20px;
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
a:hover {
  text-shadow: 0 0 2px white;
}
@media screen and (max-width: 1092px) {
  p {
    margin: 5px;
  }
  .m {
    font-size: 2.5em;
  }
}
</style>
