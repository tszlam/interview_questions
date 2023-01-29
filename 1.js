const a = 1
function foo() {
    const a = 2
    return function() {
        console.log(a)
    }
}
function bar() {
    const a = 3
    const func = foo()
    return func()
}
const run = bar()
run()

// 这个应该是要说出输出的内容
// 函数作用域的问题