// 算法
// Q1: 二叉树中序遍历
// Q2: 数组的随机排序方法，要求概率一致

// Q1 celine 23.2.13
// leetcode https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
function mid(root) {
    if (!root) return [];
    const result = [];
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        result.push(node.val);
        if (node.right) traverse(node.right);

    }
    traverse(root);
    return result;
}

// Q2 celine 23.2.13
// leetcode https://leetcode.cn/problems/shuffle-an-array/description/?orderBy=hot
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.nums.length; i++) {
        const target = Math.floor(Math.random() * (this.nums.length - i)) + i;
        const temp = this.nums[i];
        this.nums[i] = this.nums[target];
        this.nums[target] = temp;
    }
    return this.nums
};
