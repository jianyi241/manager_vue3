<template>
  <div class="about">
    <app-nav></app-nav>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import AppNav from '../components/common/AppNav/AppNav'
  export default {
    name: 'About',
    components: { AppNav }
  }
</script>

<style lang="scss" scoped>
  .about {
    padding-top: 60px;
  }
</style>
