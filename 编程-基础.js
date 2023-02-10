// 编程实现
// Q1: 手写实现 instanceof
// Q2: 手写实现 bind

// Q1 celine 23.2.10
// instanceof运算符用于检测构造函数的prototype属性是否存在于实例对象的原型链上。
function cInstanceOf(left, right) {
    // 做一些错误处理，判断right的类型和left的类型
    if (typeof right !== 'function') {
        throw new TypeError('右侧必须为function类型');
    }
    const isObject = (item) => typeof item === 'function' || (item !== null && typeof item === 'object');

    if (!isObject(left)) throw new TypeError('左侧必须是非null的object或者function类型');

    let current = left;
    while (current.__proto__) {
        if (current.__proto__ === right.prototype) {
            return true;
        }
        current = current.__proto__;
    }
    return false;
}

// Q2 celine 23.2.10 
// bind 重点 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
function cBind(that, ...args) {
    const fn = this; // 当前函数
    if (typeof fn !== 'function') throw new TypeError('必须为function才支持bind操作');
    // 中间函数用于处理集成和判断调用方式
    const fnMid = () => { };
    // bind返回的bound函数
    const fnBound = (...callArg) => {
        // 使用call来实现bind, 这里tshi使用了闭包
        return fn.call(fnMid.prototype.isPrototypeOf(this) ? this : that, ...args, ...callArg)
    }
    fnMid.prototype = fn.prototype;
    fnBound.prototype = new fnMid;
    return fnBound;
}