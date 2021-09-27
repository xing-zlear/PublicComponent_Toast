# toast

> A Toast project

## 可配置参数

|  参数名称  | 类型  | 含义  | 默认值  |是否必填 |
|  ----  | ----  | ----  | ----  | ----  |
| content  | String | 消息提示的内容 | 空 | 是 |
| type  | String | 提示状态类型，info、success、warning、error 四个选项 | info | 否 |
| duration  | Number | 显示时间-毫秒 | 1500 | 否 |
| showClose  | Boolean | 是否显示关闭按钮 | 不显示  | 否 |
| position  | String | 位置信息：left、center、right | center  | 否 |
| onClose  | function | 关闭toast后的回调函数 | 空 | 否 |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Use

``` bash
# install
npm install zlear-toast

# import
import Toast from 'zlear-toast'
Vue.use(Toast)

# use
this.$toast({
    content: 'toast的内容'
})
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
