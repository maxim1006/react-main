// {value: 5, left: {...}, right: {...}}

function invertTree(tree) {
    if (!tree) return;

    let left = tree.left;
    let right = tree.right;

    if (tree.left) {
        tree.left = right;
    }

    if (tree.right) {
        tree.right = left;
    }

    invertTree(left);
    invertTree(right);
}

function invertTreeWithOneVariable(tree) {
    if (!tree) return;

    let left = tree.left;
    tree.left = tree.right;
    tree.right = left;

    invertTree(tree.left);
    invertTree(tree.right);
}
