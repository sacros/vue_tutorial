<template>
  <nav>
    <a href="#">Some Link</a>
    <a href="#">Some Other Link</a>
    <a href="#">Friends ({{FriendStore.friends.length}})</a>
  </nav>
</template>

<script>
import FriendStore from "../stores/FriendStore"
export default {
  data() {
    return{
      FriendStore: FriendStore.data
    }
  }
}
</script>

<style scoped>
nav {
  background: #333;
}
a{
  color: white;
}
</style>
