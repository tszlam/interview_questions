// 编程实现
function render(template, data) {
    // todo
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let data = {
    name: '姓名',
    age: 18
}
const res = render(template, data) // 我是姓名，年龄18，性别undefined