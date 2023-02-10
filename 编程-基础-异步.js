// 编程实现
// 异步队列控制: 有多个fetch请求，统一时间最多支持max个请求，全部请求完后将所有结果传给回调函数cb

// celine 23.2.9
async function asyncPool(tasks, max) {
    const result = [];
    const pool = new Set();
    for (let i = 0; i < tasks.length; i++) {
        const fetchTask = tasks[i];
        pool.add(fetchTask);
        result.push(fetchTask);
        fetchTask().then(() => {
            pool.delete(fetchTask);
        });

        if (pool.length >= max) {
            await Promise.race();
        }
    }
    return await Promise.all(result);
}