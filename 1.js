// 这个应该是要说出输出的内容
// 函数作用域的问题
function q1() {
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
}

// 变形
function q2() {
    const a = 1
    function foo() {
        return function() {
            console.log(a)
        }
    }
    function bar() {
        const a = 3
        const func = foo()
        return func
    }
    const run = bar()
    run()
}