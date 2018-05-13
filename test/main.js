Vue.component('friend-component', {
    props: ['friend'],
    filters: {
        fullName(value) {
            return `${value.last}, ${value.first}`
        },
        ageInOneYear(age) {
            return age+1
        }
    },
    methods: {
        incrementAge(friend) {
            friend.age = friend.age + 1
        }
    },
    template: `
        <div>
            <h4>{{friend | fullName}}</h4>
            <h4>{{friend.age}}</h4>
            <button v-on:click="incrementAge(friend)">+</button>
            <button v-on:click="friend.age=friend.age-1">-</button>
            <input v-model="friend.first"/>
            <input v-model="friend.last"/>
        </div>
    `
})

const app = new Vue({
    el: "#app", //or, do-> app.$mount("#app")
    data: {
        sacros: {
            first: "Shubham",
            last: "Suyal",
            age:21
        },
        anct: {
            first: "Sacros",
            last: "Anct",
            age:22
        },
        friends: [
            {
            first: "Shubham",
            last: "Suyal",
            age:21
            },
            {
            first: "Sacros",
            last: "Anct",
            age:22
            },
        ],
        niggas : [],
        editFriends : null
    },
    mounted() {
        console.log("Mounted!!")
        fetch("http://rest.learncode.academy/api/sacros/niggas")
        .then(response => response.json())
        .then(data => {
            this.niggas = data
            console.log(data)
        })
    },
    methods: {
        addFriends() {
            fetch("http://rest.learncode.academy/api/sacros/niggas", {
                method:"POST",
                body:JSON.stringify({name:"Will"}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
        },
        deleteFriend(friend, i) {
            fetch("http://rest.learncode.academy/api/sacros/niggas/" + friend, {
                method:"DELETE",
            }).then(()=>{
                console.log("Deleted")
                this.niggas.splice(i, 1)
            })
        },
        updateFriend(friend) {
            fetch("http://rest.learncode.academy/api/sacros/niggas/" + friend.id, {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(friend)
            }).then(()=>{
                this.editFriends = null
            })
        }
    },
    template: `
        <div>
            <button v-on:click="addFriends()">+Add friends+</button>
            <li v-for="nigga,i in niggas">
                <div v-if="editFriends === nigga.id">
                    <input v-on:keyup.13="updateFriend(nigga)" v-model="nigga.name"/>
                    <button v-on:click="updateFriend(nigga)">save</button>
                </div>
                <div v-else>
                    <button v-on:click="editFriends=nigga.id">Edit</button>
                    {{nigga.name}}
                    <button v-on:click="deleteFriend(nigga.id, i)">X</button>
                </div>
            </li>
            <friend-component v-for="item in friends" v-bind:friend="item"></friend-component>
        </div>
    `
})
