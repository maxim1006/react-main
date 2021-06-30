function myVariant(str, arr) {
    if (str === '') return [[]];

    let result = [];

    for (let word of arr) {
        if (str.startsWith(word))
            result = [...result, ...myVariant(str.slice(word.length), arr).map(i => [word, ...i])];
    }

    return result;
}

console.log(myVariant('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(myVariant('asd', ['b', 'c']));
