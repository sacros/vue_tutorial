<template>
  <footer>You're doing awesome. You have {{FriendStore.friends.length}} friends</footer>
</template>

<script>
import FriendStore from "../stores/FriendStore"
export default {
  data() {
    return {
      FriendStore: FriendStore.data
    }
  }
}

</script>

<style scoped>
  footer {
    background: #333;
    color: white;
    margin-top:30px;
    padding: 20px;
    width:100%;
    text-align: center;
  }
</style>
