import Loading from './Loading'
import { createApp } from 'vue'
const obj = {}

obj.install = (app) => {
  console.log('vue', app)
  const LoadingPlugin = createApp(Loading)
  // const loadingPlugin = new LoadingPlugin()
  const $node = document.createElement('div')
  $node.classList.add('loading-wrap')
  const _loading = LoadingPlugin.mount($node)
  document.body.appendChild($node)
  console.log('_loading => ', _loading)
  app.config.globalProperties.$loading = _loading
}

export default obj
