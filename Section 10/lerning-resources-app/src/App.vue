<template>
  
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue'

export default {
  components: {
    LearningResource
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'official guide',
          description: 'the official vue.js',
          link: 'https://vuejs.org'
        },
        {
          id: 'official-guide2',
          title: 'official guide2',
          description: 'the official vue.js',
          link: 'https://vuejs.org'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
