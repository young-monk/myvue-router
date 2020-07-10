export default {
    render(h){
        //获取当前路径
        const path = this.$route.path
        //渲染页面页面
        return h(this.$router.mapRouter[path])
    }
}

/**
 * 函数式组件, 性能相对来说 更好一些
 */
// export default {
//     functional:true,
//     render(h,{parent}){
//         const path = parent.$route.path
//         return h(parent.$router.mapRouter[path])
//     }
// }