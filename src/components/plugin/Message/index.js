import Message from './Message'
import { createApp } from 'vue'

const obj = {}

obj.install = function (app) {
  const messagePlugin = createApp(Message)
  const $node = document.createElement('div')
  $node.classList.add('message-wrap')
  document.body.appendChild($node)
  const plugin = messagePlugin.mount($node)

  app.config.globalProperties.$message = plugin
}

export default obj
