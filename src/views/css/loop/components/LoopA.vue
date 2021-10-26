<template>
  <div
    class="loop-box"
    v-if="data.loopList.length"
    @mouseover="over"
    @mouseout="out"
  >
    <div class="btn prev" @click="prevOrNext('prev')"></div>
    <div class="btn next" @click="prevOrNext('next')"></div>
    <div class="switch">
      <div
        :class="['case', data.chooseIndex === item ? 'case-on' : '']"
        v-for="(item, index) in data.loopList.length - 2"
        :key="index"
        @mouseover="chooseChange(item)"
      ></div>
    </div>
    <div
      class="image-list clear-fix"
      :style="{
        transform: 'translateX(' + data.left * -100 + '%)',
        transitionDuration: data.dur + 's'
      }"
    >
      <div
        :class="['item', item.color]"
        v-for="(item, index) in data.loopList"
        :key="index"
        @click="to(item.url)"
      >
        <img :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted, onBeforeUnmount } from 'vue'

  export default {
    name: 'LoopA',
    props: {
      list: {
        default: []
      }
    },
    setup(props) {
      const data = reactive({
        dur: 0.3,
        left: 1,
        chooseIndex: 1,
        timer: null,
        loopList: []
      })
      // methods
      const prevOrNext = (type) => {
        if (type === 'prev') {
          if (
            data.chooseIndex === data.loopList.length - 2 &&
            data.left !== data.loopList.length - 2
          ) {
            data.dur = 0
            data.left = data.loopList.length - 2
          }
          // else {
          //   data.dur = 0.3
          //   data.left--
          // }
          data.dur = 0.3
          data.left--
          if (data.left === 0) {
            data.chooseIndex = data.loopList.length - 2
            setTimeout(() => {
              data.dur = 0
              data.left = data.loopList.length - 2
              console.log('timeout')
            }, 300)
          } else {
            data.chooseIndex = data.left
          }
        } else {
          if (data.chooseIndex === 1 && data.left !== 1) {
            data.dur = 0
            data.left = 1
          }
          // else {
          //   data.dur = 0.3
          //   data.left++
          // }
          data.dur = 0.3
          data.left++
          if (data.left === data.loopList.length - 1) {
            data.chooseIndex = 1
            console.log('222222')
            setTimeout(() => {
              data.dur = 0
              data.left = 1
              console.log('timeout')
            }, 300)
          } else {
            data.chooseIndex = data.left
          }
        }
        console.log('chooseIndex = > ', data.chooseIndex)
      }

      const chooseChange = (index) => {
        data.dur = 0.3
        data.left = index
        data.chooseIndex = data.left
      }

      const over = () => {
        clearInterval(data.timer)
      }

      const out = () => {
        autoPlay()
      }

      const autoPlay = () => {
        data.timer = setInterval(() => {
          if (data.dur === 0) {
            data.dur = 0.3
          }
          data.left++
          if (data.left === data.loopList.length - 1) {
            data.chooseIndex = 1
            setTimeout(() => {
              data.dur = 0
              data.left = 1
              console.log('timeout')
            }, 300)
          } else {
            data.chooseIndex = data.left
          }
        }, 3000)
      }

      const to = (url) => {
        console.log('url -- ', url)
        window.open(url, '_blank')
      }

      // computed

      onMounted(() => {
        const list = props.list
        const end = list[0]
        const start = list[list.length - 1]
        data.loopList = [start, ...list, end]
        autoPlay()
      })

      onBeforeUnmount(() => {
        console.log('unMount...')
        clearInterval(data.timer)
      })

      return {
        data,
        prevOrNext,
        chooseChange,
        autoPlay,
        over,
        out,
        to
      }
    }
  }
</script>

<style scoped lang="scss">
  .loop-box {
    position: relative;
    width: 1160px;
    height: 332px;
    overflow: hidden;
    z-index: 999;
    > .btn {
      position: absolute;
      width: 50px;
      height: 50px;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.3)
        url('../../../../assets/image/svg/next_icon.svg') center center/40%
        no-repeat;
      cursor: pointer;
      z-index: 999;
      border-radius: 50%;
      &.btn.prev {
        left: 15px;
        transform: translateY(-50%) rotate(-180deg);
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    > .switch {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: absolute;
      width: 130px;
      height: 30px;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%);
      z-index: 999;
      > .case {
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: #00a1d6;
        border: 2px solid #ffffff;
        cursor: pointer;
        &.case-on {
          width: 40px;
        }
      }
    }
    > .image-list {
      position: relative;
      width: 1160px;
      height: 332px;
      white-space: nowrap;
      > .item {
        display: inline-block;
        width: 1160px;
        height: 332px;
        color: #ffffff;
        text-align: center;
        font-size: 36px;
        cursor: pointer;
        > img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
