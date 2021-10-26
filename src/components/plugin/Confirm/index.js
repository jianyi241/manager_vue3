import { createApp } from 'vue'
import Confirm from './Confirm'

const obj = {}
obj.install = (app) => {
  const confirmPlugin = createApp(Confirm)
  const $node = document.createElement('div')
  $node.classList.add('confirm-wrap')
  const plugin = confirmPlugin.mount($node)
  document.body.appendChild($node)

  app.config.globalProperties.$confirm = (data) => {
    plugin.init(data)
  }
}

export default obj
