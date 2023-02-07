// 说出输出结果并解释
var a = function() {
    this.b = 3
}
var c = new a()
a.prototype.b = 9
var b = 7
a()

console.log(b)
console.log(c.b)


// 浏览器里是 3 / 3
// 在node里是 7 / 3
// 后面的好理解，因为是一个实例
// 前面的那个是因为node的全局作用域和文件的作用域还不一样