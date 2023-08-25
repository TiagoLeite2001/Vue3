const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userInput2: ''
        }
    },
    methods: {
        showAlert(){
            alert("Mostrar alerta")
        },
        confirmInputDown(event){
            this.userInput = event.target.value
        },
        confirmInputEnter(event){
            this.userInput2 = event.target.value
        }
    },
});

app.mount('#assignment');