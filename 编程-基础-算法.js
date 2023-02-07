// 函数实现
const obj = {
    a: {
        ab: {
            abb: 'a11',
            ab: 'a12'
        },
        ad: {
            a21: 'a21',
            a2x: 'a22'
        }
    },
    b: {
        b_1: 'b1',
        b_2: 'b2'
    },
    c: 'c'
}
function findPath() {
    // 实现
}

findPath(obj, 'a22') // ['a', 'ab', 'a2x']


// 这个应该是考算法实现

//======================参考答案=======================
// zl - 23.02.07
function ans(obj, target) {
    // 深度遍历
    const o = {}
    const find = (obj, target, path = []) => {
        for (const key in obj) {
            const val = obj[key]
            if (val === target) {
                return [...path, key]
            }
            if (typeof val !== 'object') continue // 不是object类型
            if (val === null) continue // null特殊情况
            if (!Object.getPrototypeOf(val) && Object.getPrototypeOf(o) !== Object.getPrototypeOf(val)) continue // 不是plain object
            // Object.create(null) -> {}
            // Object.getPrototypeof(Object.create(null)) -> null
            const res = find(val, target, [...path, key])
            if (!res) continue
            return res
        }
    }
    const res = find(obj, target) || []
    return res
}