// 编程: 两数之和
// 给定一个不重复的数字数字，找出该数组中两个数之和等于0的所以情况
// 这个也是个算法题~

// input: [1,2,3,4,-3,-1]
// output: [[3,-3], [1,-1]]

// celine 23.2.14 
var twoSum = function (nums) {
    nums.sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    let result = [];
    while (start < end) {
        if (nums[start] > 0) return result;
        if (nums[end] < 0) return result;
        const sum = nums[start] + nums[end];
        if (sum > 0) {
            end--
        } else if (sum < 0) {
            start++
        } else {
            result.push([nums[start], nums[end]]);
            start++;
            end--;
        }
    }
    return result;
};