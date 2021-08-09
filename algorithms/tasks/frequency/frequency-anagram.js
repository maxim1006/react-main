function validAnagram(str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;

    if (l1 !== l2) return false;

    let o1 = {};
    let o2 = {};

    for (let i = 0; i < l1; i++) {
        let cur = str1[i];
        o1[cur] = o1[cur] ? ++o1[cur] : 1;
    }

    for (let i = 0; i < l2; i++) {
        let cur = str2[i];
        o2[cur] = o2[cur] ? ++o2[cur] : 1;
    }

    for (let key in o1) {
        if (o1[key] !== o2[key]) return false;
    }

    return true;
}

console.log(validAnagram('anagrams', 'nagaramm')); // false
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
