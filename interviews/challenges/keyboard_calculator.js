function getInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createKeyboard() {
    let result = '';

    while (result.length < 9) {
        let rand = getInteger(1, 9) + '';

        if (!result.includes(rand)) {
            result += rand;
        }
    }

    return result;
}

function createKeyboardTaskString(length) {
    let result = '';

    while (result.length < length) {
        let rand = getInteger(1, 9) + '';
        result += rand;
    }

    return result;
}

function countClicks(keyboard, str) {
    let result = 0;
    let prevRow;

    for (let i = 0; i < str.length; i++) {
        let curRow = getCharRow(keyboard, str[i]);

        if (i === 0) {
            prevRow = curRow;
            continue;
        }

        result += Math.abs(prevRow - curRow);
        prevRow = curRow;
    }

    console.log({ keyboard, str, result });

    return result;
}

function getCharRow(keyboard, char) {
    let idx = keyboard.indexOf(char);

    if (idx >= 0 && idx < 3) return 1;
    if (idx >= 3 && idx < 6) return 2;
    if (idx >= 6 && idx < 9) return 3;
}

countClicks(createKeyboard(), createKeyboardTaskString(7));
