import Link from './componments/link'
import View from './componments/view'

export default function install(Vue) {
    //为每个组件都绑定上 beforeCreate 生命钩子
    Vue.mixin({
        beforeCreate() {
            //如果是根实例, 那么在根实例上绑定 _router 和 _route 信息
            if(this.$options.router){
                this._router = this.$options.router
                Vue.util.defineReactive(this,"_route",this._router.history.current)
            }  
        }
    })
   
    Object.defineProperty(Vue.prototype, "$route", {
        get() {
            return this.$root._route
        }
    })
    Object.defineProperty(Vue.prototype, "$router", {
        get() {
            return this.$root._router
        }
    })
    Vue.component("router-link", Link)
    Vue.component("router-view", View)
}