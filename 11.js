// 编程实现
// 实现一个repeater函数，作用是返回一个printer函数，printer调用后，每隔3000毫秒打印一次 helloworld, 打印3次

/**
 * cosnt repeater = (cbm repeat, delay) => {
 *  ...
 * }
 * const printer = repeater(console.log, 3, 3000)
 * printer('helloworld')
 * 
 * 效果:
 * 3000ms: helloworld 
 * 6000ms: helloworld 
 * 9000ms: helloworld 
 */