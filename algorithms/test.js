import { logFn } from './utils/common.utils.js';

function answerQueries(nums, queries, limit) {
    let sums = nums.reduce((acc, i, idx) => {
        if (idx === 0) {
            acc.push(i);
        } else {
            acc.push(i + acc.at(-1));
        }

        return acc;
    }, []);

    return queries.map(([start, end]) => sums[end] - sums[start] + nums[start] < limit);
}

logFn(answerQueries, [
    [1, 6, 3, 2, 7, 2],
    [
        [0, 3],
        [2, 5],
        [2, 4],
    ],
    13,
]); // 18
