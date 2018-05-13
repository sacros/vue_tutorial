<template>
<div>
    <h1>My Friends</h1>
    <li v-for="friend in FriendStore.friends">{{friend}}</li>
    <input v-model="newFriend" v-on:keyup.13="addFriends(newFriend)"/>
</div>

</template>

<script>
import FriendStore from "../stores/FriendStore"
export default{
    data() {
        return {
            newFriend: null,
            // friends: ["sacros", "anct"]
            FriendStore: FriendStore.data
        }
    },
    methods: {
        addFriends(friend) {
            // this.friends.push(friend)
            FriendStore.methods.addFriend(friend)
            this.newFriend = null
        }
    }
}
</script>

<style scoped>

</style>
