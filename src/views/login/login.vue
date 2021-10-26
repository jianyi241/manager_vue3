<template>
  <div class="login">
    <div class="form-wrap">
      <div class="form-box">
        <div class="input-group">
          <div class="value">
            <input
              type="text"
              placeholder="请输入用户名"
              v-model="user.userName"
              class="input-text user-input"
            />
          </div>
        </div>
        <div class="input-group">
          <div class="value">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="user.password"
              class="input-text pwd-input"
            />
          </div>
        </div>
        <div class="button-group">
          <div class="btn btn-primary" @click="loginIn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, getCurrentInstance } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { login } from '../../api'
  export default {
    name: 'login',
    setup() {
      const { proxy } = getCurrentInstance()
      const store = useStore()
      const router = useRouter()
      const user = reactive({
        userName: '',
        password: ''
      })

      /**
       * methods
       */
      const loginIn = () => {
        proxy.$loading.show()
        const data = new FormData()
        data.append('userName', user.userName)
        data.append('password', user.password)
        login(data)
          .then((res) => {
            console.log('login success ===> ', res)
            if (res.code === 200) {
              store.dispatch('SET_USER_INFO', res.data)
              router.replace({
                name: 'Home'
              })
            } else {
              proxy.$message.warning(res.message)
            }
            proxy.$loading.hide()
          })
          .catch((err) => {
            console.log('login error ===> ', err)
            proxy.$loading.hide()
          })
      }
      return {
        // data
        user,
        // methods
        loginIn
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './login';
</style>
