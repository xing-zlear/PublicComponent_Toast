import Vue from 'vue'
import Toast from './index.vue'

// 创建组件构造器，定义一个vue的子类
const ToastConstructor = Vue.extend(Toast)
let instances = [] // 存放toast的实例们
let initIndex = 0 // toast实例的id组成
const verticalOffset = 16
let types = ['info', 'success', 'warning', 'error']
let requiredProps = Object.keys(Toast.props).filter(item => {
  return Toast.props[item].required
})

// 初始化每个toast在页面上的垂直属性
function initVerticalOffset(position) {
  // 获取同一位置有几个toast实例
  let positionInstance = instances.filter(item => item.position === position)
  // 计算偏移量
  let topValue = positionInstance.reduce((sum, cur) => {
    return cur.$el.offsetHeight + sum + verticalOffset
  }, verticalOffset)
  return topValue
}
// 当有toast关闭时，及时更新每个toast在页面上的垂直属性
function updateVerticalOffset(removeInstance) {
  // 找到当前instance，并从数组中删除
  let index
  for(index = 0; index < instances.length; index++) {
    if(instances[index].id === removeInstance.id) {
      break
    }
  }
  instances.splice(index, 1)
  // 将其后的instance向上移
  for (; index < instances.length; index++) {
    if(instances[index].position === removeInstance.position) {
      // es6-解构赋值，快速交换两个值
      [instances[index].verticalOffset, removeInstance.verticalOffset] = [
        removeInstance.verticalOffset,
        instances[index].verticalOffset,
      ]
    }
  }
}
// 构造单个toast实例
function generateInstance(options) {
  if(!options.position) {
    options.position = 'center'
  }
  // new 一个构造器对象并传参
  const instance = new ToastConstructor({
    propsData: options
  })
  // 挂载构造器对象
  instance.$mount(document.createElement('div'))

  if(typeof options.onClose === 'function') {
    instance.onClose = options.onClose
  }

  // 标识id，便于查找
  instance.id = 'toast_' + initIndex++
  instance.verticalOffset = initVerticalOffset(options.position)

  instance.$once('toastClose', function() {
    const curInstance = this
    updateVerticalOffset(curInstance)
    if(typeof curInstance.onClose === 'function') {
      curInstance.onClose()
    }
  })

  return instance
}

// install方法其实就是给Vue.use方法识别的
export default {
  install: function(Vue, options) {
    Vue.prototype.$toast = (options = {}) => {
      // 判断是否缺少必需参数
      requiredProps.forEach(item => {
        if(!options[item]) {
          throw `err: options lack ${item} prop`;
        }
      })
      // 判断type是否存在
      if(options.type && !types.some(item => item === options.type)) {
        throw `err: toast not exist ${options.type} type`
      }
      // 生成toast实例们
      let instance = generateInstance(options)
      instances.push(instance)
    }
  }
}
