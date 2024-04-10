const data = {
    frames: [
        {
            inlineShowcases: [
                {
                    frames: [],
                },
            ],
        },
        {
            inlineShowcases: [
                {
                    frames: [
                        {
                            inlineShowcases: [
                                {
                                    frames: [
                                        {
                                            inlineShowcases: [
                                                {
                                                    frames: [],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    frames: [],
                },
            ],
        },
        {
            inlineShowcases: [
                {
                    frames: [],
                },
            ],
        },
        {
            // inlineShowcases: [
            //     {
            //         frames: [
            //             {
            //                 inlineShowcases: [
            //                     {
            //                         frames: [
            //                             {
            //                                 inlineShowcases: [
            //                                     {
            //                                         frames: [
            //                                             {
            //                                                 inlineShowcases: [
            //                                                     {
            //                                                         frames: [],
            //                                                     },
            //                                                 ],
            //                                             },
            //                                         ],
            //                                     },
            //                                 ],
            //                             },
            //                         ],
            //                     },
            //                 ],
            //             },
            //         ],
            //     },
            //     {
            //         frames: [],
            //     },
            // ],
        },
    ],
};

// классный пример на поиск глубины dfs

// function dfs(data) {
//     let depth = 0;
//     let res = 0;
//
//     if ('frames' in data) {
//         for (let frame of data.frames) {
//             depth = dfs(frame);
//             res = Math.max(res, depth);
//         }
//
//         ++res;
//     } else if ('inlineShowcases' in data) {
//         for (let inlineShowcase of data.inlineShowcases) {
//             depth = dfs(inlineShowcase);
//             res = Math.max(depth, res);
//         }
//     }
//
//     return res;
// }

function dfs(data) {
    let res = 0;

    if ('frames' in data) {
        data.frames.forEach(frame => {
            res = Math.max(res, dfs(frame));
        });
        ++res;
    } else if ('inlineShowcases' in data) {
        data.inlineShowcases.forEach(inlineShowcase => {
            res = Math.max(res, dfs(inlineShowcase));
        });
    }

    return res;
}

// сгенеренный пример
// function dfs1(data) {
//     if ('frames' in data) {
//         const depths = data.frames.map(dfs1);
//         return depths.length > 0 ? Math.max(...depths) + 1 : 0;
//     } else {
//         return (
//             data.inlineShowcases?.reduce((maxDepth, innerFrame) => {
//                 const depth = dfs1(innerFrame);
//                 return Math.max(maxDepth, depth);
//             }, 0) || 0
//         );
//     }
// }

console.log(dfs(data));
// console.log(dfs1(data));
