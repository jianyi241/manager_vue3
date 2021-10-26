<template>
  <div class="echarts">
    <app-nav></app-nav>
    <div class="container">
      <pie-component></pie-component>
    </div>
  </div>
</template>

<script>
  import AppNav from '../../components/common/AppNav/AppNav'
  import Pie from '../../components/charts/Pie'
  export default {
    name: 'charts',
    components: { AppNav, PieComponent: Pie }
  }
</script>

<style scoped lang="scss">
  .echarts {
    background-color: #eeeeee;
    padding-top: 60px;
    .container {
      position: relative;
      display: flex;
      height: calc(100vh - 60px);
    }
  }
</style>
