    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                shown: true,
                firstname: 'Pattarapol',
                lastname: 'Sangsunee',
                status: 'SIT student',
                followers: '300',
                image: './images/profile.jpg'
            }
        }

    }
    Vue.createApp(app).mount('#app')