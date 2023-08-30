import { logFn } from '../../utils/common.utils.js';
// https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/
function minimumCardPickup(cards) {
    const map = {};
    let res = Infinity;

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        if (card in map) {
            res = Math.min(res, i - map[card] + 1);
        }

        map[card] = i;
    }

    return Number.isFinite(res) ? res : -1;
}

logFn(minimumCardPickup, [[3, 4, 2, 3, 4, 7]]); // 4
logFn(minimumCardPickup, [[1, 0, 5, 3]]); // -1
