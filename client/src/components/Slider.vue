<template>
  <div class="main">
    <div class="skill-wrap">
      <div v-bind:class="{ slide: moveRight }" class="slider">
        <transition name="opac" mode="out-in">
          <component v-bind:is="component"></component>
        </transition>
      </div>
      <div class="field-wrap">
        <div class="left-field">
          <h2 v-if="showInfo">Some of my projects</h2>
          <h2 v-else>some of my projects</h2>
          <p>Here will be links to my <br> projects source codes
          as well as previews for projects.
          </p>
          <button class="move-right" @click="component = 'Project', moveRight = true">show projects</button>
        </div>
        <div class="right-field">
          <h2>my current skillset</h2>
          <p>Here is listed skills that I have learned and continnue to evolve in.
          </p>
          <button class="move-left" @click="component = 'Skill', moveRight = false">Back to CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Skills from '@/components/includes/Skills.vue'
import Projects from '@/components/includes/Projects.vue'

import ('@/assets/js/slide.js');

export default {
  name: 'Slider',
  components: {
    
    'Skill': Skills,
    'Project': Projects
  },
  data() {
    return {
      component: 'Skill',
      moveRight: false,
    }
  },
  props: {
    showInfo: {
      type: Boolean
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  text-align: center;
  max-width: 70%;
  margin: 40px auto;
  font-family: Verdana; 
}
h2 {
  text-transform: uppercase;
  font-size: 2.3em;
  margin: 5% 5%;
  font-family:monospace;
  text-shadow: 0px 0px 3px rgb(228, 228, 228),
                0px 0px 3px rgb(228, 228, 228);
}
.slider {
  margin: 0;
  position: relative;
  left: 30px;
  top: 50%;
  width: 480px;
  height: 480px;
  background: url(../assets/images/full-moon.jpg);
  background-position: center;
  border-radius: 50%;
  box-shadow: 0px 0px 20px silver,
              0px 0px 30px silver,
              0px 0px 40px silver;
  z-index: 5;
  transform: translate(-10%,-50%);
  transition: all 1s ease-in-out;
}
.skill-wrap {
  width:920px;
  background: rgba(0, 0, 0, 0.5);
  height: 420px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  box-shadow: 0px 0px 13px 0px rgba(158,158,158,0.66);
}
.move-right, .move-left {
    text-align: center;
    text-transform: uppercase;
    border:solid 0px rgb(235, 235, 235);
    font-weight: bold;
    border-radius: 80px;
    padding: 18px 0px;
    min-width: 160px;
    outline:none;
    font-size: 14px;
    color:white;
    background: $button-color;
    cursor: pointer;
    &:hover {
      background: $button-hover;
    }
    &:active {
      background: $button-active;
    }
}
.slide {
  left: 55%;
}
.field-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.right-field {
  width: 420px;
  height: 320px;
  color: rgb(255, 253, 253);
}
.left-field {
  width: 420px;
  height: 320px;
  color: rgb(255, 253, 253);
}
.opac-enter, .opac-leave-to {
  transition: all 0.5s ease-out;
  opacity: 0;
}
.opac-enter-to, .opac-leave {
  transition: all 0.5s ease-in;
  opacity: 1;
}
@media (min-height: 700px){
  .skill-wrap {
    transform: translate(-50%,-70%);
  }
}
@media (max-width: 1050px) {
  h2 {
    margin: 12% 12%;
    margin-bottom: 6%;
  }
  p {
    margin: 20px auto;
  }
  .skill-wrap {
    width:700px;
    height: 340px;
  }
  .slider {
    width: 380px;
    height: 380px;
  }
  .slide {
    left: 53%;
  }
}
@media (max-width: 760px) {
  h2 {
    margin: 6% 12%;
  }
  p {
    margin: 20px auto;
  }
  .field-wrap {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    height: 90%;
  }
  .skill-wrap {
  width:380px;
  height: 760px;
  transform: translate(-50%,-50%);
  }
  .left-field, .right-field {
    width: 100%;
  }
  
  .slider {
  top: -5%;
  left:50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%,0%)
  }
  .slide {
    top: 53%;
  }
}
@media only screen and (max-width: 450px) {
  h2 {
    margin: 4% 12%;
  }
  p {
    margin: 20px auto;
  }
  .field-wrap {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    height: 90%;
  }
  .skill-wrap {
  width:300px;
  height: 620px;
  }
  .left-field, .right-field {
    width: 100%;
  }
  .slider {
  top: -2%;
  width: 320px;
  height: 320px;
  }
  .slide {
    top: 50%;
  }
}
@media only screen and (max-width: 380px) {
  h2 {
    margin: 8% 16%;
    font-size: 20px;
  }
  p {
    font-size: 12px;
  }
  .field-wrap {
    height: 90%;
  }
  .skill-wrap {
  width:260px;
  height: 520px;
  }
  .left-field, .right-field {
    width: 100%;
  }
  .slider {
  top: -3%;
  width: 276px;
  height: 270px;
  }
  .slide {
    top: 50%;
  }
  .logo {
    display: none;
  }
}
</style>
