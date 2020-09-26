/*
 * @Description: 
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-19 21:41:44
 * @LastEditors: Seven
 * @LastEditTime: 2020-09-24 23:25:28
 */
import live2d from './live2d'
import live2dMessage from './live2dMessage'
import live2dMenu from './live2dMenu'
const Mylive2d = {
    install(Vue) {
        Vue.component('mylive2d', live2d)
        Vue.component('mylive2dMessage', live2dMessage)
        Vue.component('mylive2dMenu', live2dMenu)
    }
}

export default Mylive2d