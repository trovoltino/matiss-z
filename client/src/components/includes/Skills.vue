<template>
  <div class="skills">
    <button class="left" @click="changeSkillset(-1)"></button>
    <button class="right" @click="changeSkillset(+1)"></button>
      <div class="main-skills">
        <div v-if="skillsToDisplay === 0" class="frontend" >
          <h3>Front End</h3>
          <ul>
            <li>JavaScript ES6+</li>
            <li>AJAX/REST API</li>
            <li>JQuery</li>
            <li>Vue.js</li>
            <li>TypeScript</li>
            <li>SASS/LESS</li>
            <li>Responsive Design</li>
            <li>HTML5/CSS3</li>
          </ul>
        </div>
        <div v-if="skillsToDisplay === 1" class="backend">
          <h3>Back End</h3>
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Laravel</li>
            <li>MongoDb</li>
            <li>MySQL/NoSQL</li>
            <li>Visual Studio/.NET</li>
          </ul>
        </div>
        <div v-if="skillsToDisplay === 2" class="random">
        <h3>Other Skills</h3>
        <ul>
          <li>Git</li>
          <li>Magento2</li>
          <li>SEO</li>
          <li>Bamboo</li>
          <li>Gulp</li>
          <li>Basic PhotoShop</li>
          <li>Windows/Linux</li>
          <li>Jira/Atlassian</li>
        </ul>
      </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Skills',
   data() {
    return{
      skillsToDisplay: 0
    }
  },
  methods: {
     changeSkillset(number){
      this.skillsToDisplay+= number;
      if (this.skillsToDisplay > 2) {
        this.skillsToDisplay = 0;
      } else if(this.skillsToDisplay < 0) {
        this.skillsToDisplay = 2
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
}
li {
  font-size: 1.2em;
  font-weight: bold;
  list-style-type: none;
}
h3 {
  font-size: 1.6em;
  font-family:Verdana ;
  text-transform: uppercase;
  margin-bottom: 2em;
}
.skills {
  background: transparent;
  display: flex;
  flex-direction: column;
  min-width: 480px;
  max-width: 480px;
  min-height: 480px;
  max-height: 480px;
  .left, .right{
    border: none;
    height: 7em;
    width: 5em;
    position: absolute;
    top: 35%;
    background:$main-grey;
    cursor: pointer;
    &:hover {
      background: $grey-hover;
    }
    &:active {
      background: rgb(139, 139, 139);
    }
  }
  .left {
     left: 2%;
     clip-path: polygon(50% 0%, 34% 50%, 50% 100%, 0% 50%);
  }
  .right {
    right: 2%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 66% 50%);
  }
}

.main-skills {
  @include center;
  top:60%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 5px 5px;
  margin-top: -4em;
  &.frontend, .backend{
    margin: 10px;
    display: flex;
    
    @include flex-column;
  }
}

@media only screen and (max-width: 1050px) {
  ul {
    justify-content:space-evenly;
  }
  li {
    font-size: 1em;
  }
  h3 {
    font-size: 1.2em;
  }
  .skills {
    align-items: center;
    min-width: 260px;
    min-height: 340px;
    max-height: 340px;
  }
}
@media only screen and (max-width: 760px) {
  ul {
    justify-content:space-evenly;
  }
  li {
    font-size: 1.1em;
  }
  h3 {
    font-size: 1.4em;
  }
  .skills {
    align-items: center;
    min-width: 280px;
    min-height: 340px;
    max-height: 340px;
  }
}
@media only screen and (max-width: 450px) {
  ul {
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 1em;
    font-weight: bold;
    list-style-type: none;
  }
  h3 {
    font-size: 1.2;
    font-family:Verdana ;
    text-transform: uppercase;
  }
  .skills {
    background: transparent;
    @include flex-column;
    min-width: 260px;
    min-height: 300px;
    max-height: 300px;
  }
}
@media only screen and (max-width: 380px) {
  ul {
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 10px;
    font-weight: bold;
    list-style-type: none;
  }
  h3 {
    font-size: 14px;
    font-family:Verdana ;
    text-transform: uppercase;
  }
  .skills {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 260px;
    min-height: 300px;
    max-height: 300px;
  }
}

</style>
