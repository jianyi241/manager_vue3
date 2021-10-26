<template>
  <div class="app-nav">
    <ul class="nav-ul">
      <li class="nav-item" v-for="(item, index) in navList" :key="index">
        <router-link :to="item.routerUrl">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AppNav',
    data() {
      return {
        navList: [
          {
            name: '首页',
            routerName: 'Home',
            routerUrl: '/'
          },
          {
            name: 'CSS',
            routerName: 'Css',
            routerUrl: '/css'
          },
          {
            name: '图表',
            routerName: 'Charts',
            routerUrl: '/charts'
          },
          {
            name: '关于',
            routerName: 'About',
            routerUrl: '/about'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .app-nav {
    position: fixed;
    width: 100vw;
    line-height: 60px;
    left: 0;
    top: 0;
    background: #6495ed;
    padding: 0 240px;
    > .nav-ul {
      display: flex;
      text-align: center;
      > .nav-item > a {
        display: block;
        color: #ffffff;
        padding: 0 18px;
        &.router-link-active {
          background: #42b983;
        }
      }
    }
  }
</style>
