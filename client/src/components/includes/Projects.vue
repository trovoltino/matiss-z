<template>
  <div class="projects">
   
    <div class="projects-container">
      <aside class="left">
        <div class="project file-drop">
          <a href="https://fewclicks-demo.netlify.com" target="_blank" title="this is filedrop app">FileDrop</a>
          <p class='tooltip-file' >
            Here are previou for app that uses REST API to communicate with client software and generate report for specific pdf file,
            and send report data in email template to client.
          </p>
        </div>
        <div class="project">
          <a href="https://bitbucket.org/matiiss-z/scandiwebapp/src/master/" target="_blank" title="T">ScandiWeb</a>
          <p class='tooltip-Scandi'>Here are source code for app where backend is written with php,
            and frontend is jQuerry with vanila js.
          </p>
        </div>
      </aside>
      <aside class="right">
        <div class="project">
          <a href="https://www.fewclicks.app" target="_blank">FewClicks</a>

        </div>
        <div class="project">
          <a href="https://bitbucket.org/matiiss-z/magebit/src/master/" target="_blank">MageBit</a>
        </div>
      </aside>
      <div>
        <a class="current" href="https://github.com/trovoltino/matiss-z" target="_blank">Current Project</a>
      </div>      
    </div>
    <router-link class="about" to="/about">AboutMe</router-link>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data() {
    return {
      msg: 'this is rela message and you will get it'
    }
  }
}
</script>

<style lang="scss" scoped>
.mage-info {
  display: none;
}

.projects-container{
  @include center;
  display: flex;
  flex-wrap: wrap;
  width: 22em;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -70%);
  a {
    text-decoration: none;
  }

  .project {
    display: block;
    font-size: 1.4em;
    padding: 1.4em 1.3em;
    margin: 0.2em 0.1em;
    width: 70%;
    height: 1em;
    background: $main-grey;
    &:hover {
      background: $grey-hover;
    }
    a {
      font-size: 1.2em;
      color: $button-color;
      font-family: monospace;
    }
  }
  
}
a[title]:hover:after {
  content: attr(title);
  position: absolute;
  top: -100%;
  left: 0;
  color: red;
}
.tooltip-file {
  display: none;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 45%;
  justify-content: space-between;
  .project{
    clip-path: polygon(100% 22%, 88% 50%, 100% 79%, 22% 79%, 0 50%, 20% 22%);
    cursor: pointer;
  } 
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 45%;
  .project{
    clip-path: polygon(79% 22%, 100% 50%, 80% 78%, 0 78%, 12% 50%, 0 22%);
    cursor: pointer;
  } 
}
.current {
  color: $button-color;
  font-family: monospace;
  cursor: pointer;
  font-size: 1.6em;
  font-family: monospace;
  padding: 2em 1.8em;
  
  clip-path: polygon(19% 32%, 81% 32%, 100% 50%, 100% 50%, 81% 68%, 19% 68%, 0 50%, 0 50%);
  background :$main-grey;
  &:hover {
    background: $grey-hover;
  }
}
.about {
  text-decoration: none;
  color: $button-color;
  position: absolute;
  bottom: 16%;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.8em;
  font-family: monospace;
  padding: 1.6em 1.8em;
  clip-path: polygon(19% 32%, 81% 32%, 100% 50%, 100% 50%, 81% 68%, 19% 68%, 0 50%, 0 50%);
  background: $main-grey;
  margin-bottom: -1.1em;

  &:hover {
    background: $grey-hover;
  }
}

@media only screen and (max-width: 1050px) {
  .projects-container{
    .project {
      font-size: 1.2em;
      padding: 1.2em 1.1em;
    }
  }
  .about {
    font-size: 1.6em;
    padding: 1.4em 1.7em;
  }
  .current {
    font-size: 1.4em;
    padding: 2em 1.8em;
    margin-bottom: 1.2em;
  }
}

@media (max-width: 450px) {
  .projects-container{
    .project {
      font-size: 1.2em;
      padding: 1em 0.8em;
    }
  }
  .about {
    font-size: 1.4em;
    padding: 1.4em 1.5em;
    margin-bottom: -1.2em;
    
  }
  .current {
    font-size: 1.3em;
    padding: 1.8em 1.6em;
  }
}
@media (max-width: 381px) {
  .projects-container{
    .project {
      font-size: 1em;
      padding: 1em 0.5em;
    }
  }
  .about {
    font-size: 1.4em;
    padding: 1.4em 1.5em;
    margin-bottom: -1.2em;
    
  }
  .current {
    font-size: 1.3em;
    padding: 1.8em 1.6em;
  }
}

</style>
