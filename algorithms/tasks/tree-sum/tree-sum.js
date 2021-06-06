const tree = [
    {
        v: 5,
        c: [
            {
                v: 5,
            },
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 11,
                c: [
                    {
                        v: 12,
                        c: [
                            {
                                v: 5,
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
                v: 7,
            },
            {
                v: 12,
                c: [
                    {
                        v: 11,
                    },
                ],
            },
            {
                v: 14,
            },
        ],
    },
];

function sum(tree) {
    let result = 0;

    if (Array.isArray(tree) && tree.length) {
        tree.forEach(i => {
            if (i.v) {
                result += i.v;
            }

            if (i.c) {
                result += sum(i.c);
            }
        });
    }

    return result;
}

function sumIterStack(tree) {
    let result = 0;
    let stack = JSON.parse(JSON.stringify(tree));

    if (Array.isArray(tree) && tree.length) {
        while (stack.length) {
            let current = stack.pop();

            if (typeof current.v === 'number') {
                result += current.v;
            }

            if (Array.isArray(current.c) && current.c.length) {
                stack.push(...current.c);
            }
        }
    }

    return result;
}

function sumIterQueue(tree) {
    let result = 0;
    let queue = tree;

    if (Array.isArray(tree) && tree.length) {
        while (queue.length) {
            let current = queue.shift();

            if (typeof current.v === 'number') {
                result += current.v;
            }

            if (Array.isArray(current.c) && current.c.length) {
                queue.push(...current.c);
            }
        }
    }

    return result;
}

console.log(sum(tree));
console.log(sumIterStack(tree));
console.log(sumIterQueue(tree));
