<template>
  <div id="app">
    <div class="message_item">
      <label>不同状态：</label>
      <button @click="showTypeMessage('info', '这是一条消息提示')">消息提示</button>
      <button @click="showTypeMessage('success', '恭喜你，这是一条成功消息')">成功提示</button>
      <button @click="showTypeMessage('warning', '警告，警告，警告！')">警告提示</button>
      <button @click="showTypeMessage('error', '发生错误了噢！')">错误提示</button>
    </div>
    <div class="message_item">
      <label>显示时间：</label>
      <button @click="showTimeMessage(3000, '莫急～我会自动关闭的哦')">3s后自动关闭</button>
      <button @click="showTimeMessage(0, '我不会自动关闭，除非你刷新or给我加个关闭按钮')">永久显示</button>
    </div>
    <div class="message_item">
      <label>关闭按钮：</label>
      <button @click="showCloseMessage(3000, '莫急～我会自动关闭的哦，当然你也可以手动让我退出')">3s后自动关闭</button>
      <button @click="showCloseMessage(0, '我不会自动关闭，需手动点击关闭按钮')">永久显示</button>
    </div>
    <div class="message_item">
      <label>显示位置：</label>
      <button @click="showPositionMessage('left', '左边的提示')">左</button>
      <button @click="showPositionMessage('center', '中间的提示')">中</button>
      <button @click="showPositionMessage('right', '右边的提示')">右</button>
    </div>
    <div class="message_item">
      <label>回调函数：</label>
      <button @click="showCallbackMessage(3000, '关闭当前toast后会触发回调函数')">自动关闭</button>
      <button @click="showCallbackMessage(0, '关闭当前toast后会触发回调函数')">手动关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    /** params
     * content: String      消息提示的内容（必填）
     * type: String         提示状态类型，info、success、warning、error 四个选项，默认info（选填）
     * duration: Number     显示时间-毫秒，默认1500（选填）
     * showClose: Boolean   是否显示关闭按钮，默认不显示（选填）
     * position: String     位置信息：left、center、right，默认center（选填）
     * onClose: function    关闭回调函数（选填）
     * */
    showTypeMessage(type, message) {
      this.$toast({
        content: message,
        type: type
      })
    },
    showTimeMessage(time, message) {
      this.$toast({
        content: message,
        type: 'success',
        duration: time
      })
    },
    showCloseMessage(time, message) {
      this.$toast({
        content: message,
        type: 'success',
        duration: time,
        showClose: true
      })
    },
    showPositionMessage(position, message) {
      this.$toast({
        content: message,
        position: position
      })
    },
    showCallbackMessage(time, message) {
      this.$toast({
        content: message,
        duration: time,
        showClose: true,
        onClose() {
          console.log('提示通知已关闭，可以执行下一步操作了')
        }
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.message_item {
  text-align: left;
  padding: 10px 60px;
  button {
    margin-right: 10px;
  }
}
</style>
