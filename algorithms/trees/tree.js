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

const recursive = tree => {
    let sum = 0;

    if (!Array.isArray(tree) || tree.length <= 0) {
        return 0;
    }

    for (let i of tree) {
        if (typeof i.v === 'number') {
            sum += i.v;
        }

        if (Array.isArray(i.c) && tree.length >= 0) {
            sum += recursive(i.c);
        }
    }

    return sum;
};

function iteration(tree) {
    if (!Array.isArray(tree) || tree.length <= 0) return 0;

    let sum = 0;
    let stack = [];

    tree.forEach(i => stack.push(i));

    while (stack.length) {
        let node = stack.pop();

        if (typeof node.v === 'number') {
            sum += node.v;
        }

        if (Array.isArray(node.c) && node.c.length > 0) {
            stack = [...stack, ...node.c];
        }
    }

    return sum;
}

console.log(recursive(tree)); // 69
console.log(iteration(tree)); // 69
