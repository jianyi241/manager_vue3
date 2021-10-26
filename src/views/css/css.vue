<template>
  <div class="css">
    <app-nav></app-nav>
    <div class="container">
      <sidebar></sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from '../../components/common/AppNav/AppNav'
  import Sidebar from '../../components/common/Sidebar/Sidebar'
  export default {
    name: 'css',
    components: { Sidebar, AppNav }
  }
</script>

<style scoped lang="scss">
  @import './css';
</style>
