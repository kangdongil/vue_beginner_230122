const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "john@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
        }
    },
    methods: {
        getUser() {
            this.firstName = "Catherine"
            this.lastName = "Acrone"
            this.email = "catherine@gmail.com"
            this.gender = "female"
            this.picture = "https://randomuser.me/api/portraits/women/2.jpg"
        },
    }
})

app.mount("#app")