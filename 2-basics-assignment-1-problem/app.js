Vue.createApp({
  data() {
    return {
      name: "Tiago",
      age: 22,
      image:
        "https://www.artmajeur.com/medias/hd/v/i/viccaart/artwork/16729561_f32afdd0-6cc7-43ac-aa60-076684e88f6a.jpg",
    };
  },
  methods: {
    getAgeIn5() {
      return this.age + 5;
    },
    getFavNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
