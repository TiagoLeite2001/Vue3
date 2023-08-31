const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    watch:{
        resultString(){

            console.log("watcher")

            const that = this;
            setTimeout(function(){
                this.result = 0;
                console.log(this.result)
            }, 5000);
        }
    },
    computed: {
        resultString(){
            if(this.result > 37){
                return 'Too much!'
            }else if(this.result < 37){
                return "Not there yet"
            }else{
                return this.result
            }
        }
    },
    methods: {
        add(x){
            console.log(this.result)
            this.result += x;
            console.log(this.result)
        }
    },
});

app.mount('#assignment');