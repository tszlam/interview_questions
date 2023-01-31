// 编程实现
function getValue(obj, path) {
    // todo
}

const obj = {
    a: 'toutiao',
    b: {
        c: {
            d: 'douyin'
        },
        e:  [
            {
                f: 'faceu'
            }
        ]
    },
}

console.log(getValue(obj, 'a')) //toutiao
console.log(getValue(obj, 'b.c.d')) //douyin
console.log(getValue(obj, 'b.e[0].f')) //faceu