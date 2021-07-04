// Дохожу до последней ноды где target === '', возвращаю [[]] в этом случае,
// возвращаюсь из рекурсии и добавляю word ко всем чайлдам (даже если не нашел то возвращаю просто [], которая умрет от ...) а также убираю вложенность от предыдущего массива (suffixWays.map(way => [word, ...way]))
// далее пушу в финальный result и возвращаю наверх

function allConstruct(target, wordBank) {
    if (target === '') return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);
            // предполагаю что верну все массив массивов из всех возможных вариантов
            const suffixWays = allConstruct(suffix, wordBank);
            // добавляю к каждому массиву вариантов слово в начало
            const targetWays = suffixWays.map(way => [word, ...way]);
            // сохраняю все пути в массив
            result.push(...targetWays);
        }
    }

    return result;
}

// m = target.length; n = wordBank.length;
// O(n**m) time
// O(m) space
console.time('allConstruct');
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
// [
//     [ 'ab', 'cd', 'ef' ],
//     [ 'ab', 'c', 'def' ],
//     [ 'abc', 'def' ],
//     [ 'abcd', 'ef' ]
// ]
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('aaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])); // []
console.timeEnd('allConstruct');
