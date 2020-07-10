
import install from './install'
import Histroy from './history'
//定义一个 mapRouter 函数
const createMapRouter = Symbol("createMapRouter")
//定义一个 init 函数
const init = Symbol("init")
//定义VueRouter类
class VueRouter{
    //构造器
    constructor(options){
        //获取映射router
        this.mapRouter = this[createMapRouter](options.routes)
        //当前的history
        this.history = new Histroy()
        //获取模式, 默认模式为 hash 模式
        this.mode = options.mode || "hash"
        //初始化 当前 route 中的信息
        this[init]()
    }
    /**
     * 
     * @param {*} routes: [{path:"",componment:comp}]
     * 将参数中的数组去掉, 重新映射成新的形式, {path1: component1, path2: component2}
     * 目的是方便获取组件, 不需要每次重新获取
     */
    [createMapRouter](routes = []){
        //定义 mapRouter 变量
        let mapRouter = {}
        //将routes中的每一个路径和组件对应起来, 放到mapRouter中
        for(let i=0;i<routes.length;i++){
            mapRouter[routes[i].path] = routes[i].component
        }
        return mapRouter
    }
    /**
     * 该方法用于初始化路径
     */
    [init](){
        //判断当前模式
        if(this.mode == "hash"){
            //在hash模式下，如果当前的路径为 空, 则给一个默认值
            location.hash ? '' : location.hash = '/'
            //监听 DOMContentLoaded 事件, 当所有 DOM 元素加载完成后, 往当前的 route 路由信息中添加当前路径
            document.addEventListener("DOMContentLoaded",()=>{
                this.history.current.path = location.hash.slice(1)
            })
            //监听 hashchange 事件, 当hash改变时, 重新修改当前 route 的路由信息
            window.addEventListener("hashchange",()=>{
                this.history.current.path = location.hash.slice(1)
            })
        }else{
            //在 history 模式下, 当所有 DOM 元素加载完成后, 往当前的 route 路由信息中添加当前路径
            document.addEventListener("DOMContentLoaded",()=>{
                this.history.current.path = location.pathname
            })
        }
        
    }
}
//Vue.use() 会调用该类的install方法, 并且会传给一个Vue实例
VueRouter.install = install
export default VueRouter