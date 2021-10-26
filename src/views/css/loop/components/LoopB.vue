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
        :class="['case', data.index === index ? 'case-on' : '']"
        v-for="(item, index) in data.loopList.length"
        :key="index"
        @mouseover="chooseChange(index)"
      ></div>
    </div>
    <div class="image-list">
      <div class="item" @click="to(data.loopList[data.index].url)">
        <img
          :class="data.change && animate ? 'fade' : ''"
          :src="data.loopList[data.index].image"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, onMounted, watch } from 'vue'

  export default {
    name: 'LoopB',
    props: {
      list: {
        default: []
      },
      animate: {
        default: true
      }
    },
    setup(props) {
      const data = reactive({
        change: false,
        index: 0,
        timer: null,
        loopList: []
      })
      // methods
      const prevOrNext = (type) => {
        if (type === 'prev') {
          if (data.index === 0) {
            data.index = data.loopList.length - 1
            return
          }
          data.index--
        } else {
          if (data.index === data.loopList.length - 1) {
            data.index = 0
            return
          }
          data.index++
        }
      }

      const chooseChange = (index) => {
        data.index = index
      }

      const changePreview = (val) => {
        data.currentFlex = val
      }

      const over = () => {
        clearInterval(data.timer)
      }

      const out = () => {
        autoPlay()
      }

      const autoPlay = () => {
        data.timer = setInterval(() => {
          if (data.index === data.loopList.length - 1) {
            data.index = 0
            return
          }
          data.index++
        }, 3000)
      }

      const to = (url) => {
        console.log('url -- ', url)
        // const router = useRouter().resolve({
        //   path: url
        // })
        window.open(url, '_blank')
      }

      onMounted(() => {
        const list = props.list
        data.loopList = list
        autoPlay()
      })

      // watch
      watch(
        () => data.index,
        (n, o) => {
          console.log(n, ' --- ', o)
          data.change = true
          setTimeout(() => {
            data.change = false
          }, 300)
        }
      )
      // computed
      return {
        data,
        prevOrNext,
        chooseChange,
        changePreview,
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
      > .item {
        width: 1160px;
        height: 332px;
        color: #ffffff;
        text-align: center;
        font-size: 36px;
        cursor: pointer;
        > img {
          width: 100%;
          height: 100%;
          transition: opacity 0.3s ease-in;
          &.fade {
            animation: fade ease-in 0.3s;
          }
          @keyframes fade {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>
