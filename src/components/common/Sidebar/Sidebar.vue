<template>
  <div class="sidebar">
    <ul class="sidebar-ul">
      <li class="item" v-for="(item, index) in sidebarList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        sidebarList: [
          {
            name: 'Flex',
            path: '/css/flex'
          },
          {
            name: 'Loop',
            path: '/css/loop'
          },
          {
            name: 'Animate',
            path: '/css/animate'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .sidebar {
    position: relative;
    width: 240px;
    height: calc(100vh - 60px);
    background-color: #ffffff;
    .sidebar-ul {
      .item {
        a {
          display: block;
          color: #666666;
          padding: 15px 30px;
          &.router-link-exact-active {
            color: #ffffff;
            background-color:
            /*#cc66FF*/
            /*#e6e6fa;*/ #cc99ff;
          }
        }
      }
    }
  }
</style>
