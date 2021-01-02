// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import './plugins/element.js'
// // 导入字体图标阿里云提供
// import './assets/fonts/iconfont.css'
// // 导入全局样式表
// import './assets/css/global.css'
// import TreeTable from 'vue-table-with-tree-grid'
// // 导入富文本编辑器
// import VueQuillEditor from 'vue-quill-editor'
// // 导入富文本对应的样式
// // import 'quill/dist/quill.core.css' // import styles
// // import 'quill/dist/quill.snow.css' // for snow theme
// // import 'quill/dist/quill.bubble.css' // for bubble theme

// // 导入Nprogress 包对应的js和css
// import Nprogress from 'nprogress'
// // import 'nprogress/nprogress.css'

// import axios from 'axios'
// import VueRouter from 'vue-router'
// // 配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// // 在request拦截器中展示进度条 Nprogress.start()
// axios.interceptors.request.use(config => {
//   Nprogress.start()
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   // 在最后必须return config
//   return config
// })
// // 在response拦截器中 隐藏进度条 Nprogress.done()
// axios.interceptors.response.use(config => {
//   Nprogress.done()
//   return config
// })
// // 解决冗余导航的问题
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function (location) {
//   return routerPush.call(this, location).catch(error => error)
// }
// // http请求通过axios处理
// Vue.prototype.$http = axios

// Vue.config.productionTip = false

// Vue.component('tree-table', TreeTable)
// // 将富文本编辑器注册为全局可用的组件
// Vue.use(VueQuillEditor)

// Vue.filter('dateFormat', function(originVal) {
//   const dt = new Date(originVal)

//   const y = dt.getFullYear()
//   const m = (dt.getMonth() + 1 + '').padStart(2, '0')
//   const d = (dt.getDate() + '').padStart(2, '0')
//   const hh = (dt.getHours() + '').padStart(2, '0')
//   const mm = (dt.getMinutes() + '').padStart(2, '0')
//   const ss = (dt.getSeconds() + '').padStart(2, '0')

//   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// })

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
