// 说出输出
function print() {
    return function() {
        console.log(this)
    }
}
let obj = {
    a: 1,
    b: 2
}

obj.print = print
obj.print()()