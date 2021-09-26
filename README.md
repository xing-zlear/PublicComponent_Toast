# toast

> A Toast project

## 可配置参数

|  参数名称  | 类型  | 含义  | 默认值  |是否必填 |
|  ----  | ----  | ----  |
| content  | String | 消息提示的内容 | 空 | 必填 |
| type  | String | 提示状态类型，info、success、warning、error 四个选项 ｜ 默认info | 选填 |
| duration  | Number | 显示时间-毫秒 ｜ 默认1500 | 选填 |
| showClose  | Boolean | 是否显示关闭按钮 ｜ 默认不显示  | 选填 |
| position  | String | 位置信息：left、center、right ｜ 默认center  | 选填 |
| onClose  | function | 关闭toast后的回调函数 | 空 | 选填 |

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Build Setup

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
