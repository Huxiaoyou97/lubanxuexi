
const model1 = "我是a.js"
export {
    model1
}

const Vue = function() {
    console.log('123')
}

window.Vue = Vue

export default Vue // 默认导出
