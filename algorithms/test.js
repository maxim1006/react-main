function isPalindrome(n) {
    let i = 0;
    let j = n.length - 1;

    while (i < j) {
        if (n[i] !== n[j]) return false;
        i++;
        j--;
    }

    return true;
}

console.log(isPalindrome('abcdcba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('mama'));
