// 说出打印顺序并解释
setTimeout(function() {
    console.log('setTimeout1')
}, 0)

new Promise(resolve => {
    console.log('script end')
    setTimeout(function() {
        resolve()
    }, 0);
}).then(function() {
    console.log('Promise resolve1')
}).then(function() {
    console.log('Promise resolve2')
})

Promise.resolve().then(function() {
    console.log('Promise resolve3')
})

console.log('script start')