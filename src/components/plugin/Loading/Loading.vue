<template>
  <div class="loading" v-show="isShow">
    <div class="loading-mask"></div>
    <div class="loading-box">
      <div class="orbital"></div>
      <div class="run-icon"></div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Loading',
    setup() {
      const isShow = ref(false)

      const show = () => {
        isShow.value = true
      }

      const hide = () => {
        isShow.value = false
      }

      return {
        show,
        hide,
        isShow
      }
    }
  }
</script>

<style scoped lang="scss">
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 99999;
    .loading-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
    }
    .loading-box {
      position: relative;
      width: 100px;
      height: 100px;
      .orbital {
        @include absAlignCenter;
        width: 55px;
        height: 55px;
        border: 4px solid rgba(0, 0, 0, 0.2);
        border-radius: 50%;
      }
      .run-icon {
        position: absolute;
        width: 60px;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: transparent url(loading_icon.svg) center center/contain
          no-repeat;
        animation: Rotate 0.5s linear 0s infinite normal;
      }

      @keyframes Rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
</style>
