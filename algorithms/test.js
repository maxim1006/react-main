import { logFn } from './utils/common.utils.js';

function flippingZero(str) {
    let start = 0;
    let num = 0;
    let res = 0;
    let flips = 0;

    for (let i = 0; i < str.length; i++) {
        let cur = str[i];

        if (cur === '1') ++num;

        if (cur === '0' && flips === 1) {
            while (flips) {
                let cur = str[start];

                if (cur === '0') --flips;

                ++start;
                --num;
            }
        }

        if (cur === '0' && flips < 1) {
            ++num;
            ++flips;
        }

        res = Math.max(res, num);
    }

    return res;
}

logFn(flippingZero, ['1101100111']); // 5
