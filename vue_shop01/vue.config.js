// module.exports = {
//   chainWebpack: config => {
//     // 发布模式
//     config.when(process.env.NODE_ENV === 'production', config => {
//       config.entry('app').clear().add('./src/main_prod.js')

//       config.set('externals',{
//         vue:'Vue',
//         'vue-router':'VueRouter',
//         axios:'axios',
//         lodash:'_',
//         echarts:'echarts',
//         nprogress:'NProgress',
//         'vue-quill-editor':'VueQuillEditor'
//       })
//     })
//     config.when(process.env.NODE_ENV === 'development', config => {
//       config.entry('app').clear().add('./src/main_dev.js')
//     })
//   }
// }
