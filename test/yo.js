// const app = new Vue({
//     el:"#mahapp",
//     data:{
//         sacros: {
//             first: "Shubham",
//             last: "Suyal",
//             age: 22
//         },
//         anct: {
//             first: "Sacros",
//             last: "anct",
//             age: 23
//         },
//         friends: [
//             {
//                 first: "Shubham",
//                 last: "Suyal",
//                 age: 22
//             },
//             {
//                 first: "Sacros",
//                 last: "anct",
//                 age: 23
//             },
//        ]
//     },
//     computed:{
//         sacrosFullName() {
//             return `${this.sacros.first} ${this.sacros.last}`
//         },
//         anctFullName() {
//             return `${this.anct.first} ${this.anct.last}`
//         }
//     },
//     methods:{
//         incrementAgeByOne(friend) {
//             friend.age = friend.age + 1
//         }
//     },
//     filters:{
//         fullName(value) {
//             return `${value.first} ${value.last}`
//         }
//     },
//     template: `
//     <div>
//         <h1>YoLo</h1>
//         <h3>{{sacrosFullName}} {{sacros.age}}</h3>
//         <h3>{{anctFullName}} {{anct.age}}</h3>
//         <div v-for="friend in friends">
//             <h4>{{friend | fullName}}</h4>
//             <h4>{{friend.age}}</h4>
//             <button v-on:click="incrementAgeByOne(friend)">+</button>
//             <button v-on:click="friend.age = friend.age - 1">-</button>
//             <input v-model="friend.first" placeholder="Entr first name"/>
//             <input v-model="friend.last" placeholder="Entr last name"/>
//         </div>
//     </div>

//     `
// })


Vue.component('friend-component', {
    props : ['friend_object'],
    methods: {
        incrementAgeByOne(friend) {
            friend.age = friend.age + 1
        },
        decrementAgeByOne(friend) {
            friend.age = friend.age - 1
        }
    },
    filters: {
        fullName(value) {
            return `${value.first} ${value.last}`
        }
    },
    template: `
        <div>
            <h4>{{friend_object | fullName}}</h4>
            <h4>{{friend_object.age}}</h4>
            <button v-on:click="incrementAgeByOne(friend_object)">+</button>
            <button v-on:click="decrementAgeByOne(friend_object)">-</button>
            <input v-model="friend_object.first" placeholder="Entr first name"/>
            <input v-model="friend_object.last" placeholder="Entr last name"/>
        </div>
    `
})


const app = new Vue({
    el:"#mah_app",
    data:{
        friends: [
            {
                first: "Shubham",
                last: "Suyal",
                age: 22
            },
            {
                first: "Sacros",
                last: "anct",
                age: 23
            },
       ]
    },
    template: `
    <div>
        <h1>YoLo</h1>
        <friend-component v-for="item in friends" v-bind:friend_object="item"></friend-component>
    </div>

    `
})