<template>
  <transition name="message">
    <div 
      v-if="visible"
      class="message_wrapper"
      :class="[`toast_${type}`, `toast_${position}`]"
      :style="{top: verticalOffset + 'px'}">
      <i class="icon iconfont" :class="iconClass"></i>
      <p class="message_content">{{ content }}</p>
      <i v-if="showClose" class="close iconfont icon-guanbi" @click="close"></i>
    </div>
  </transition>
</template>
<script>
export default({
  name: 'toast',
  props: {
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 2500
    },
    position: {
      type: String,
      default: 'center'
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      timer: null,
      verticalOffset: 16
    }
  },
  computed: {
    iconClass() {
      var iconMap = {
        'info': 'icon-tishi',
        'success': 'icon-chenggong',
        'warning': 'icon-ziyuan',
        'error': 'icon-cuowu'
      }
      return iconMap[this.type]
    }
  },
  mounted() {
    // 挂载Toast在页面中
    document.body.appendChild(this.$el)
    this.startTimer()
    // 这样滑入动画才能生效
    this.$nextTick(() => {
      this.visible = true
    })
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$emit("toastClose")
      }
    }
  },
  methods: {
    startTimer() {
      if(this.duration > 0) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.duration)
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer)
    },
    close() {
      this.visible = false
    }
  },
  beforeDestroy() {
    this.stopTimer()
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el)
  }
})
</script>

<style lang='scss' scoped>
.message_wrapper {
  position: fixed;
  z-index: 99999;
  min-width: 360px;
  border-radius: 4px;
  background: #fff;
  color: #909399;
  padding: 15px 15px 15px 20px;
  border-color: #EBEEF5;
  background-color: #edf2fc;
  line-height: 1;
  transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.3s, bottom 0.3s; // 更新top位置时的动画
  .message_content {
    display: inline-block;
    padding: 0;
    margin: 0;
    line-height: 1;
    font-size: 14px;
  }
  .icon {
    font-weight: bold;
  }
  .close {
    float: right;
    cursor: pointer;
  }
}
.toast_center {
  left: 50%;
  margin-left: -180px;
}
.toast_left {
  left: 8px;
}
.toast_right {
  right: 8px;
}
.toast_success {
  border-color: #e1f3d8;
  background-color: #f0f9eb;
  .icon, .message_content {
    color: #67C23A;
  }
}
.toast_warning {
  border-color: #faecd8;
  background-color: #fdf6ec;
  .icon, .message_content {
    color: #E6A23C;
  }
}
.toast_error {
  border-color: #fde2e2;
  background-color: #fef0f0;
  .icon, .message_content {
    color: #F56C6C;
  }
}
.message-enter-active { // 进入动画
  animation: msgbox-fade-in 0.5s;
}
.message-leave-active { // 离开动画
  animation: msgbox-fade-out 0.5s;
}

@keyframes msgbox-fade-in {
  0% {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes msgbox-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -30px, 0);
    opacity: 0;
  }
}
</style>
