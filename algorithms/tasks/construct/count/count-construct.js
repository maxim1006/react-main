function countConstruct(target, wordBank, store = {}) {
    let result = 0;

    if (target === '') return 1;

    for (let i of wordBank) {
        if (target.startsWith(i)) {
            result += countConstruct(target.slice(i.length), wordBank);
        }
    }

    return result;
}

function countConstructM(target, wordBank, store = {}) {
    let result = 0;

    if (target in store) return store[target];
    if (target === '') return 1;

    for (let i of wordBank) {
        if (target.startsWith(i)) {
            result += countConstructM(target.slice(i.length), wordBank, store);
        }
    }

    store[target] = result;
    return result;
}

// m = target.length, n = wordBank.length
// Time: O(n^m * m) умножаю еще на m изза слайса
// Space: O(m * m) умножаю еще на m изза слайса
console.time('countConstruct');
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
console.timeEnd('countConstruct');
console.log('------------------');
// Time: O(n * m * m) умножаю еще на m изза слайса
// Space: O(m * m) умножаю еще на m изза слайса
console.time('countConstructM');
console.log(countConstructM('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4
console.log(countConstructM('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstructM('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructM('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructM('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstructM('eeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
console.timeEnd('countConstructM');
