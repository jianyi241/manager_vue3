<template>
  <div class="confirm" v-show="isShow">
    <div class="confirm-mask" @click="hide"></div>
    <div class="confirm-box-wrap">
      <div class="confirm-box" :style="{ width: width + 'px' }">
        <div class="title">{{ title }}</div>
        <div class="content">{{ content }}</div>
        <div class="btn-group">
          <div class="btn btn-confirm" @click="onConfirm">
            {{ confirmText }}
          </div>
          <div class="btn btn-cancel" @click="onCancel">{{ cancelText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Confirm',
    data() {
      return {
        isShow: false,
        width: 400,
        title: '提示',
        content: '确认删除此项吗？',
        confirmText: '确定',
        cancelText: '取消',
        confirm() {},
        cancel() {}
      }
    },
    methods: {
      init(data) {
        const {
          title,
          content,
          confirmText,
          cancelText,
          width,
          confirm,
          cancel
        } = data
        this.show()
        this.title = title || this.title
        this.content = content || this.content
        this.confirmText = confirmText || this.confirmText
        this.cancelText = cancelText || this.cancelText
        this.width = width || this.width
        this.confirm = confirm || this.confirm
        this.cancel = cancel || this.cancel
      },
      show() {
        this.isShow = true
      },
      hide() {
        this.isShow = false
      },
      onConfirm() {
        console.log('confirm...')
        this.hide()
        this.confirm()
      },
      onCancel() {
        console.log('cancel...')
        this.hide()
        this.cancel()
      }
    }
  }
</script>

<style scoped lang="scss">
  .confirm {
    .confirm-mask {
      position: fixed;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .confirm-box-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      .confirm-box {
        position: relative;
        background-color: #ffffff;
        border-radius: 4px;
        .title {
          font-size: 16px;
          font-weight: 800;
          padding: 15px 20px;
        }
        .content {
          font-size: 16px;
          line-height: 30px;
          padding: 15px;
          border-top: 1px solid #efefef;
          border-bottom: 1px solid #efefef;
        }
        .btn-group {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          padding: 10px;
          .btn {
            text-align: center;
            font-size: 14px;
            color: #ffffff;
            padding: 10px 20px;
            border-radius: 4px;
            margin-left: 10px;
            cursor: pointer;
            transition: background-color linear 0.5s;
            &.btn-confirm {
              background-color: rgb(100, 149, 237);
              &:hover {
                background-color: rgb(90, 129, 207);
              }
            }
            &.btn-cancel {
              background-color: rgb(156, 156, 156);
              &:hover {
                background-color: rgb(136, 136, 136);
              }
            }
          }
        }
      }
    }
  }
</style>
