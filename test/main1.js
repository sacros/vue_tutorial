const app = new Vue({
    el: "#app",
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
    },
    computed: {
        anctFullName() {
            return `${this.anct.first} ${this.anct.last}`
        },
        sacrosAgeInOneYear() {
            return this.sacros.age + 1
        }
    },
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
            <h1>Name {{sacros | fullName}}</h1>
            <h2>Age {{sacrosAgeInOneYear}}</h2>
            <h1>Name {{anctFullName}}</h1>
            <h2>Age {{anct.age | ageInOneYear}}</h2>
            <div v-for="friend in friends">
                <h4>{{friend | fullName}}</h4>
                <h4>{{friend.age}}</h4>
                <button v-on:click="incrementAge(friend)">+</button>
                <button v-on:click="friend.age=friend.age-1">-</button>
                <input  v-model="friend.first"/>
                <input  v-model="friend.last"/>
            </div>
        </div>
    `
})
