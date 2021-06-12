// https://leetcode.com/problems/delete-nodes-and-return-forest/
//
// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let delSet = new Set(to_delete);
    let res = [];
    dfs(root, res, delSet);
    return res;
};

function dfs(root, res, delSet, parent) {
    if (!root) {
        return null;
    }

    if (!parent && !delSet.has(root.val)) {
        res.push(root);
    }

    const left = root.left;
    const right = root.right;

    if (delSet.has(root.val)) {
        if (parent && parent.left === root) {
            parent.left = null;
        }

        if (parent && parent.right === root) {
            parent.right = null;
        }

        root = null;
    }

    dfs(left, res, delSet, root);
    dfs(right, res, delSet, root);

    return res;
}

// var 2
// var delNodes = function(root, to_delete) {
//     let delSet = new Set(to_delete);
//     let res = [];
//
//     if (!delSet.has(root.val)) {
//         res.push(root)
//     }
//
//     dfs(root, res, delSet);
//     return res;
// };
//
// function dfs(root, res, delSet) {
//     if (!root) {
//         return null;
//     }
//
//     root.left = dfs(root.left, res, delSet);
//     root.right = dfs(root.right, res, delSet);
//
//     if (delSet.has(root.val)) {
//         if (root.left) res.push(root.left);
//         if (root.right) res.push(root.right);
//         return null;
//     }
//
//     return root;
// }
