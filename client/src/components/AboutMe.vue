<template>
  <div class="about">
    <div class="picture">
      <!--<img class="m-logo" ref="logo" src="@/assets/images/main-logo.svg" alt="matiss-logo" width="200px" height="200px">-->
       
    </div>
    <p class="info">
        I am developer who enjoys working with latest technology as well as following trends and best practices,
        in free time I am trying to further my knowlage of given technology stack and 
        develop basic aps and functionals to get better understanding of inner workings
        and capabilitys of given technology's.
           Current work requires usage of CMS (magento2), as well as jQuery and integration of REST api.
        Most of work is around building and or customizing modules to achive new demands. 
        
    </p>
    <router-link to="/" class="about-me">Back To CV</router-link>
  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  data() {
    return{}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about {
  font-size: 1.3em;
  height: 450px;
  width: 700px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 13px 0px rgba(158,158,158,0.66);       
}
.info {
    padding: 20px;
    margin: 20px;
}
.about-me {
  padding: 15px;
  background: transparent;
  text-decoration: none;
  color:white;
  z-index: 20;
  border: 2px solid rgb(119, 119, 119);
  box-shadow: 0px 0px 10px silver;
  cursor: pointer;
}
.about-me:hover {
  border: 2px solid rgb(59, 59, 59);
  box-shadow: 0px 0px 10px rgb(141, 141, 141),
              0px 0px 20px rgb(110, 110, 110);
}
.about-me:active {
  background: rgb(189, 189, 189);
}
@media (max-width: 720px) {
  .about {
    font-size: 1.3em;
    height: 80vh;
    width:90%;
  }
}

</style>