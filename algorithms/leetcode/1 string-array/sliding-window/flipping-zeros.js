import { logFn } from '../../../utils/common.utils.js';

/*Вам дана двоичная подстрока s (строка, содержащая только «0» и «1»). Операция включает в себя переворачивание «0» в «1». Какова длина самой длинной подстроки, содержащей только «1», после выполнения не более одной операции?

Например, при заданном s = "1101100111" ответ равен 5. Если вы выполните операцию с индексом 2, строка станет 1111100111.
* */
function flippingZero(str) {
    let left = 0;
    let res = 0;
    let flips = 0;

    for (let right = 0; right < str.length; right++) {
        if (str[right] === '0') ++flips;

        // не забываю что только в случае > 1 надо запускать проверку
        while (flips > 1) {
            if (str[left] === '0') --flips;

            ++left;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
}

logFn(flippingZero, ['1101100111']); // 5
