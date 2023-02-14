// 编程实现
// 找出字符串数组中最长的相同前缀
// ['flower', 'flow', 'flight'] => 'fl'
// ['toutiao', 'douyin', 'tiktok'] => ''

// celine 23.2.14
// leetcode https://leetcode.cn/problems/longest-common-prefix/submissions/
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    let result = '';
    const compare = strs[0];
    for (let i = 0; i < compare.length; i++) {
        if (strs.some(item => compare[i] !== item[i])) {
            return result;
        } else {
            result += compare[i];
        }
    }
    return result;
};
