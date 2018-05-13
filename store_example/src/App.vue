<template>
  <div id="app" >
    <img src="./assets/logo.png">
    <Navigation/>
    <Friends/>
    <FooterComponent/>
  </div>
</template>

<script>
import Friends from './components/Friends'
import Navigation from './components/Navigation'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    Friends,
    Navigation,
    FooterComponent
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
  margin-top: 60px;
}
</style>
