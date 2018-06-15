<template>
  <div id="app">
              <apptoolbar></apptoolbar>
                   <router-view/>
              <appfooter style="position:absolute;z-index:-1"></appfooter>
  </div>
</template>


<script>

import appfooter from './components/AppFooter'

import apptoolbar from './components/AppToolbar'


export default {
  name:'App',

  components:{appfooter,apptoolbar}
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
