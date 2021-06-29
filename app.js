const app = Vue.createApp({
    data() {
        return{
            firstname: 'Yasith',
            lastname: 'Fonseka',
            email: 'yasithfonseka123@gmail.com',
            gender: 'male',
            image: 'https://randomuser.me/api/portraits/men/10.jpg', 
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            //console.log(results)

            //console.log(this.firstname)
            this.firstname = results[0].name.first
            this.lastname = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.image = results[0].picture.large
        },
    },
})

app.mount('#app')