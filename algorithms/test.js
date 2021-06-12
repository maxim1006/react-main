const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        v: 5,
        c: [
            {
                v: 10,
            },
            {
                v: 15,
            },
        ],
    },
];

function recursive(tree) {
    let sum = 0;

    if (!Array.isArray(tree) || tree.length <= 0) {
        return sum;
    }

    for (let i of tree) {
        sum += i.v;

        if (Array.isArray(i.c) && i.c.length) {
            sum += recursive(i.c);
        }
    }

    return sum;
}

function treeSum(tree) {
    let sum = 0;

    let stack = tree;

    while (stack.length) {
        let i = stack.pop();

        sum += i.v;

        if (Array.isArray(i.c) && i.c.length) {
            stack = [...stack, ...i.c];
        }
    }

    return sum;
}

console.log(recursive(tree));
console.log(treeSum(tree));
