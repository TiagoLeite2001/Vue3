const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    resetInput(){
      this.name = ''
    },
    confirmInput(){
      this.confirmedName  = this.name;
    },
    submitForm(){
      alert('submitted!')
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName
    },
    add(){  
      this.counter++;
    },
    remove(){
      this.counter--;
    }
  },
});

app.mount('#events');
