// 说出打印结果以及解释
console.log('script start')
setTimeout(function() {
    console.log('setTimeout')
}, 0)
new Promise(function(resolve) {
    console.log('Promise1')
    resolve()
    console.log('Promise2')
}).then(function() {
    console.log('Promise then')
})
console.log('script end')

// script start
// Promise1
// Promise2
// script end
// Promise then
// setTimeout
