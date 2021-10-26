<template>
  <div class="pie-charts">
    <div id="container"></div>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue'
  import Highcharts from 'highcharts/highstock'
  import Highcharts3D from 'highcharts/highcharts-3d'
  Highcharts3D(Highcharts)
  // 在 Highcharts 加载之后加载功能模块
  require('highcharts/modules/exporting')(Highcharts)
  export default {
    name: 'pie',
    components: {},
    setup() {
      const data = reactive({
        options: {}
      })
      onMounted(() => {
        Highcharts.chart('container', {
          chart: {
            type: 'pie',
            options3d: {
              enabled: true,
              alpha: 45
            }
          },
          title: {
            text: '简数科技每周水果消耗量'
          },
          subtitle: {
            text: 'Highcharts 中的3D环形图'
          },
          plotOptions: {
            pie: {
              innerSize: 100,
              depth: 45
            }
          },
          series: [
            {
              name: '货物金额',
              data: [
                ['香蕉', 8],
                ['猕猴桃', 3],
                ['桃子', 1],
                ['橘子', 6],
                ['苹果', 8],
                ['梨', 4],
                ['柑橘', 4],
                ['橙子', 1],
                ['葡萄 (串)', 1]
              ]
            }
          ]
        })
      })
      return {
        data
      }
    }
  }
</script>

<style scoped lang="scss">
  .pie-charts {
    width: 400px;
    height: 400px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
</style>
