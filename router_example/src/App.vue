<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <router-link to="/friends/ab/cd/ef">Friends</router-link>
    <router-link to="/contact">Contact Us</router-link>
    <router-link to="/accounts">Accounts</router-link>
    <!-- <router-link to="/">Home</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
a {
  color: #42b983;
}
</style>
