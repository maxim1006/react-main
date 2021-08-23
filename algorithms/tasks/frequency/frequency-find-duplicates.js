function areThereDuplicates(...arr) {
    return new Set(arr).size !== arr.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'a', 'b')); //true
