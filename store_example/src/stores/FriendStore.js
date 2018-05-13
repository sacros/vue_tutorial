const FriendStore = {
    data: {
        friends: ["shubham", "suyal"]
    },
    methods: {
        addFriend(name) {
            FriendStore.data.friends.push(name)
        }
    }
}

export default FriendStore