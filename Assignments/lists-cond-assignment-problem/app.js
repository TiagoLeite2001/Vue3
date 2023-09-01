const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            showList: true,
            hideShowText: 'Hide List'
        }
    },
    watch:{
        showList(){
            this.showList ? this.hideShowText='Hide List' : this.hideShowText='Show List'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
        },
        hideShowList(){
            this.showList = !this.showList
        }
    },
});

app.mount('#assignment');
