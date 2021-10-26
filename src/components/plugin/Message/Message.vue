<template>
  <div :class="['message', isShow ? 'animate' : '']" v-show="isShow">
    <div class="message-box" :style="{ color: color }">{{ text }}</div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Message',
    setup() {
      const isShow = ref(false)
      const text = ref('提示框')
      const timeOut = ref(null)
      const color = ref('blue')
      const init = (msg) => {
        clearTimeout(timeOut)
        timeOut.value = null
        text.value = msg
        isShow.value = true
        timeOut.value = setTimeout(() => {
          isShow.value = false
        }, 2000)
      }
      const info = (msg) => {
        init(msg)
        color.value = '#666666'
      }
      const success = (msg) => {
        init(msg)
        color.value = '#5cb85c'
      }
      const warning = (msg) => {
        init(msg)
        color.value = '#f0ad4e'
      }
      const error = (msg) => {
        init(msg)
        color.value = '#c9302c'
      }
      return {
        text,
        isShow,
        timeOut,
        color,
        init,
        info,
        success,
        warning,
        error
      }
    }
  }
</script>

<style scoped lang="scss">
  .message {
    position: fixed;
    height: 0;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    opacity: 0;
    &.animate {
      animation: fade 2s ease-in-out 0s normal none;
    }
    .message-box {
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: #666666;
      background: #ffffff;
      padding: 0 30px;
      border-radius: 3px;
      z-index: 9999;
    }
    @keyframes fade {
      0% {
        top: 10%;
        opacity: 0;
      }
      25% {
        top: 20%;
        opacity: 1;
      }
      75% {
        top: 20%;
        opacity: 1;
      }
      .100% {
        top: 10%;
        opacity: 0;
      }
    }
  }
</style>
