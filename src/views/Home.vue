<template>
  <div class="home">
    <app-nav></app-nav>
    <h1 @click="sayHi">{{ data.name }}</h1>
    <h1 @click="sayHi">{{ data.isShowNav }}</h1>
  </div>
</template>

<script>
  import { reactive, getCurrentInstance } from 'vue'
  import { useStore } from 'vuex'
  import AppNav from '../components/common/AppNav/AppNav'
  export default {
    name: 'Home',
    components: { AppNav },
    setup() {
      const store = useStore()
      const { proxy } = getCurrentInstance()
      const data = reactive({
        name: '孙宇浩',
        sex: '男',
        age: 18,
        isShowNav: store.state.showNav
      })

      const sayHi = () => {
        console.log('proxy ===> ', proxy)
        proxy.$confirm({
          content: '确定这样吗~',
          confirm: () => {
            console.log('确认')
            console.log(this, '--------')
          }
        })
        // console.log(`我叫${data.name}, 今年${data.age}岁,是${data.sex}人`)
      }

      return {
        data,
        sayHi
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home {
    padding-top: 60px;
  }
</style>
