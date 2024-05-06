import { logFn } from '../utils/common.utils.js';

const data = {
    frames: [
        {
            inlineShowcases: [
                {
                    frames: [],
                },
            ],
        },
        // {
        //     inlineShowcases: [
        //         {
        //             frames: [
        //                 {
        //                     inlineShowcases: [
        //                         {
        //                             frames: [
        //                                 {
        //                                     inlineShowcases: [
        //                                         {
        //                                             frames: [],
        //                                         },
        //                                     ],
        //                                 },
        //                             ],
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //         {
        //             frames: [],
        //         },
        //     ],
        // },
    ],
};

function countDeep(data, res = 0) {
    if ('frames' in data) {
        for (let frame of data.frames) {
            let curRes = countDeep(frame);
            res = Math.max(res, curRes);
        }

        ++res;
    }

    if ('inlineShowcases' in data) {
        for (let inlineShowcase of data.inlineShowcases) {
            let curRes = countDeep(inlineShowcase);
            res = Math.max(res, curRes);
        }
    }

    return res;
}

function countDeep1(data, res = 0) {
    if ('frames' in data) {
        ++res;
    }

    if (!data.frames.length) {
        return res;
    }

    data.frames.reduce((acc, item) => {
        if (item.inlineShowcases?.length) {
            item.inlineShowcases.reduce((accInner, itemInner) => {
                accInner = countDeep1(itemInner, res);
                res = Math.max(res, accInner);
            }, 0);
        }
    }, res);

    return res;
}

logFn(countDeep, [data]);
logFn(countDeep1, [data]);
