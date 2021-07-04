// будет ошибкой удалять символы из середины

function canConstruct(target, wordBank) {
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);

            if (canConstruct(suffix, wordBank)) return true;
        }
    }

    return false;
}

function canConstructM(target, wordBank, store = {}) {
    if (target in store) return store[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);

            if (canConstructM(suffix, wordBank, store)) {
                store[target] = true;
                return true;
            }
        }
    }

    store[target] = false;
    return false;
}

// m = target.length, n = wordBank.length
// Time: O(n^m * m) умножаю еще на m изза слайса
// Space: O(m * m) умножаю еще на m изза слайса
console.time('canConstruct');
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
console.timeEnd('canConstruct');
console.log('-----------------');
// Time: O(n * m * m) умножаю еще на m изза слайса
// Space: O(m * m) умножаю еще на m изза слайса
console.time('canConstructM');
console.log(canConstructM('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstructM('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstructM('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstructM('eeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
console.timeEnd('canConstructM');
