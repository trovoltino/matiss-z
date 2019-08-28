<template>
  <div class="home">
    
    <transition name="switch" mode="out-in">
      <component v-bind:is="component"></component>      
    </transition>
    <!-- <button class="about-me" @click="switchComp">About Me</button> -->
  </div>
</template>

<script>
// @ is an alias to /src

import AboutMe from '@/components/AboutMe.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
    'Slider': Slider,
    'AboutMe': AboutMe
  },
  data() {
    return {
      component: 'Slider',
      showInfo: false
    }
  },
  methods: {
    switchComp() {
      if(this.component=='AboutMe') {
        this.component = 'Slider';
      } else {
        this.component = 'AboutMe';
      }
    }

  }
}
</script>

<style scoped>


.switch-enter, .switch-leave-to {
  transition: all 0.2s ease-out;
  opacity: 0;
}
.switch-enter-to, .switch-leave {
  transition: all 0.2s ease-in;
  opacity: 1;
  
}
</style>
