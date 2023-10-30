<template>
  <ul>
    <LearningResource
      v-for="res in storedResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></LearningResource>
  </ul>
</template>

<script>

export default{
  props: ['storedResources']
}
</script>