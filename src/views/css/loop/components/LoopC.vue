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
    <div class="image-list clear-fix">
      <div
        v-for="(item, index) in data.loopList"
        :style="{ transitionDuration: data.dur + 's' }"
        :class="[
          'item',
          data.left === Number(index) ? 'middle' : '',
          data.left === Number(index + 1) ? 'left' : '',
          data.left === Number(index - 1) ? 'right' : ''
        ]"
        :key="index"
        @click="to(item.url)"
      >
        <img :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted } from 'vue'

  export default {
    name: 'LoopC',
    props: {
      list: {
        default: []
      }
    },
    setup(props) {
      const data = reactive({
        dur: 0.3,
        chooseIndex: 1,
        left: 1,
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
          data.dur = 0.3
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
        }
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

      onMounted(() => {
        const list = props.list
        const end = list[0]
        const start = list[list.length - 1]
        data.loopList = [start, ...list, end]
        autoPlay()
      })

      // computed
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
      /*transform-style: preserve-3d;*/
      padding: 50px 0;
      > .item {
        position: absolute;
        width: 568px;
        height: 162px;
        top: 50%;
        left: 50%;
        color: #ffffff;
        cursor: pointer;
        transform: translate(-50%, -50%);
        z-index: 1;
        > img {
          width: 100%;
          height: 100%;
        }
        &.left {
          width: 568px;
          height: 162px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 1;
        }
        &.middle {
          width: 812px;
          height: 232px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
        &.right {
          width: 568px;
          height: 162px;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 1;
        }
      }
    }
  }
</style>
