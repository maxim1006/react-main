function isSubsequence(str1, str2) {
    let str1L = str1.length;
    let str2L = str2.length;
    let start = 0;
    let end = str2.length;
    let overlapNumber = 0;

    if (str1L > str2L) return false;

    while (start < end) {
        if (str2[start] === str1[overlapNumber]) ++overlapNumber;
        if (overlapNumber === str1L) return true;
        ++start;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
