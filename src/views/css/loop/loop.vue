<template>
  <div class="loop">
    <div class="page-title">轮播图演示</div>
    <div class="page-content">
      <div class="module">
        <div class="module-title">
          <div class="tab">
            <div
              :class="[
                'tab-pane',
                data.currentComponent === item ? 'active' : ''
              ]"
              v-for="(item, index) in data.tabList"
              :key="index"
              @click="changeTab(item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="module-content">
          <component
            :is="data.currentComponent"
            :list="data.loopList"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoopA from './components/LoopA'
  import { reactive } from 'vue'
  import LoopB from './components/LoopB'
  import LoopC from './components/LoopC'
  export default {
    name: 'Loop',
    components: { LoopA, LoopB, LoopC },
    setup() {
      const data = reactive({
        loopList: [
          {
            idx: 0,
            image: require('@/assets/image/loop/loop1.png'),
            url: 'https://www.bilibili.com/bangumi/play/ep411788'
          },
          {
            idx: 1,
            image: require('@/assets/image/loop/loop2.png'),
            url: 'https://www.bilibili.com/bangumi/play/ep409015'
          },
          {
            idx: 2,
            image: require('@/assets/image/loop/loop3.png'),
            url: 'https://www.bilibili.com/bangumi/play/ep414648'
          },
          {
            idx: 3,
            image: require('@/assets/image/loop/loop4.png'),
            url: 'https://www.bilibili.com/bangumi/play/ep417021'
          },
          {
            idx: 4,
            image: require('@/assets/image/loop/loop5.png'),
            url: 'https://www.bilibili.com/bangumi/play/ep409591'
          }
        ],
        tabList: ['LoopA', 'LoopB', 'LoopC', 'LoopD'],
        currentComponent: 'LoopA'
      })

      const changeTab = (val) => {
        data.currentComponent = val
      }
      return {
        data,
        changeTab
      }
    }
  }
</script>

<style scoped lang="scss">
  .loop {
    background-color: #ffffff;
    padding: 15px;
    .page-title {
      color: #333333;
      font-size: 36px;
      padding: 15px 0;
      border-bottom: 1px solid #dddddd;
    }
    .page-content {
      padding: 15px 0;
      .module {
        margin-bottom: 30px;
        .module-title {
          /*font-size: 24px;*/
          .tab {
            display: flex;
            background-color: #eeefff;
            color: #666666;
            .tab-pane {
              line-height: 40px;
              padding: 0 20px;
              cursor: pointer;
              &:hover {
                color: #ffffff;
                background-color: cornflowerblue;
              }
              &.active {
                color: #ffffff;
                background-color: cornflowerblue;
              }
            }
          }
        }
        .module-content {
          display: flex;
          justify-content: center;
          position: relative;
          margin-top: 15px;
          border: 1px solid #dddddd;
          padding: 15px;
        }
      }
    }
  }
</style>
