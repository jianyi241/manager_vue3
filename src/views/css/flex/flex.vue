<template>
  <div class="flex">
    <div class="page-title">Flex布局演示</div>
    <div class="page-content">
      <div class="module">
        <div class="module-title">flex</div>
        <div class="module-content">
          <div class="choose">
            <div
              :class="[
                'choose-item',
                data[data.currentFlex] === item.value ? 'active' : ''
              ]"
              v-for="(item, index) in data.flexList"
              :key="index"
              @click="choose('flex', item.value)"
            >
              {{ item.text }}
            </div>
          </div>
          <div class="preview">
            <div
              class="item red pointer"
              :style="{ flex: data.flex1 }"
              @click="changePreview('flex1')"
            >
              {{ data.currentFlex === 'flex1' ? 'change me' : '' + data.flex1 }}
            </div>
            <div
              class="item green pointer"
              :style="{ flex: data.flex2 }"
              @click="changePreview('flex2')"
            >
              {{ data.currentFlex === 'flex2' ? 'change me' : '' + data.flex2 }}
            </div>
            <div
              class="item blue pointer"
              :style="{ flex: data.flex3 }"
              @click="changePreview('flex3')"
            >
              {{ data.currentFlex === 'flex3' ? 'change me' : '' + data.flex3 }}
            </div>
          </div>
        </div>
      </div>
      <div class="module">
        <div class="module-title">flex-direction and flex-wrap</div>
        <div class="module-content">
          <div class="choose">
            <div
              :class="[
                'choose-item',
                data.flexDir === item.value ? 'active' : ''
              ]"
              v-for="(item, index) in data.flexDirList"
              :key="index"
              @click="choose('flexDir', item.value)"
            >
              {{ item.text }}
            </div>
            <div
              :class="[
                'choose-item',
                data.flexWrap === item.value ? 'active' : ''
              ]"
              v-for="(item, index) in data.flexWrapList"
              :key="index"
              @click="choose('flexWrap', item.value)"
            >
              {{ item.text }}
            </div>
          </div>
          <div
            class="preview"
            :style="{ flexDirection: data.flexDir, flexWrap: data.flexWrap }"
          >
            <div class="item red w500">box</div>
            <div class="item green w500">box</div>
            <div class="item blue w500">box</div>
          </div>
        </div>
      </div>
      <div class="module">
        <div class="module-title">bili bili movie 效果</div>
        <div class="module-content">
          <div
            class="preview"
            style="width: 1500px; align-items: flex-start"
            :style="{
              justifyContent: data.movieIndex === 2 ? 'flex-end' : 'flex-start'
            }"
          >
            <div class="item red movie" @mouseover="movieMouseover(0)">box</div>
            <div class="item green movie" @mouseover="movieMouseover(1)">
              box
            </div>
            <div class="item blue movie" @mouseover="movieMouseover(2)">
              box
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'flex',
    setup() {
      const data = reactive({
        flex1: '1',
        flex2: '1',
        flex3: '1',
        currentFlex: 'flex1',
        flexList: [
          {
            text: 'flex: 1',
            value: '1'
          },
          {
            text: 'flex: 2',
            value: '2'
          },
          {
            text: 'flex: 3',
            value: '3'
          },
          {
            text: 'flex: 1 1 auto',
            value: '1 1 auto'
          },
          {
            text: 'flex: 1 1 30px',
            value: '1 1 30px'
          }
        ],
        flexDir: 'row',
        flexDirList: [
          {
            text: 'flex-direction: row',
            value: 'row'
          },
          {
            text: 'flex-direction: row-reverse',
            value: 'row-reverse'
          },
          {
            text: 'flex-direction: column',
            value: 'column'
          },
          {
            text: 'flex-direction: column-reverse',
            value: 'column-reverse'
          }
        ],
        flexWrap: 'initial',
        flexWrapList: [
          {
            text: 'flex-wrap: initial',
            value: 'initial'
          },
          {
            text: 'flex-wrap: wrap',
            value: 'wrap'
          },
          {
            text: 'flex-wrap: nowrap',
            value: 'nowrap'
          },
          {
            text: 'flex-wrap: wrap-reverse',
            value: 'wrap-reverse'
          }
        ],
        movieIndex: 0
      })

      // methods
      const choose = (type, val) => {
        console.log('$event -- ', val)
        if (type === 'flex') {
          data[data.currentFlex] = val
        } else if (type === 'flexDir') {
          data.flexDir = val
        } else if (type === 'flexWrap') {
          data.flexWrap = val
        }
      }
      const changePreview = (val) => {
        data.currentFlex = val
      }

      const movieMouseover = (index) => {
        data.movieIndex = index
      }

      // computed

      return {
        data,
        choose,
        changePreview,
        movieMouseover
      }
    }
  }
</script>

<style scoped lang="scss">
  .flex {
    background-color: #ffffff;
    padding: 15px;
    .page-title {
      color: #333333;
      font-size: 36px;
      padding: 15px 0;
      border-bottom: 1px solid #dddddd;
    }
    .page-content {
      padding: 15px 0;
      .module {
        margin-bottom: 30px;
        .module-title {
          font-size: 24px;
        }
        .module-content {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-top: 15px;
          border: 1px solid #dddddd;
          padding: 15px;
          .choose {
            .choose-item {
              width: 400px;
              background-color: rgba(100, 149, 237, 0.1);
              padding: 10px;
              margin-bottom: 10px;
              cursor: pointer;
              &.active {
                border: 2px solid #6495ed;
              }
            }
          }
          .preview {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1000px;
            text-align: center;
            border: 1px solid #dddddd;
            overflow: hidden;
            .item {
              padding: 15px;
            }
            .movie {
              flex-shrink: 0;
              /*width: 500px;*/
              flex-basis: 500px;
              transition: flex-basis 0.2s linear;
              &:hover {
                /*width: 1000px;*/
                flex-basis: 1000px;
              }
            }
          }
        }
      }
    }
  }
</style>
