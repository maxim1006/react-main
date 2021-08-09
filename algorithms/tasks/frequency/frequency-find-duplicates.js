function areThereDuplicates(...arr) {
    return new Set(arr).size !== arr.length;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'a', 'b'));
