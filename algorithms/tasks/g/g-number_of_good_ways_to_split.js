// You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.
//
//     Return the number of good splits you can make in s.
//
//
//
//     Example 1:
//
// Input: s = "aacaba"
// Output: 2
// Explanation: There are 5 ways to split "aacaba" and 2 of them are good.
// ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
// ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
// ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
// ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
//     Example 2:
//
// Input: s = "abcd"
// Output: 1
// Explanation: Split the string as follows ("ab", "cd").
//     Example 3:
//
// Input: s = "aaaaa"
// Output: 4
// Explanation: All possible splits are good.
//     Example 4:
//
// Input: s = "acbadbaada"
// Output: 2

var numSplits = function(s) {
    let setLeft = new Set();
    let setRight = new Set();
    let sLength = s.length;
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < sLength - 1; i++) {
        setLeft.add(s[i]);
        leftArr.push(setLeft.size);

        setRight.add(s[sLength - 1 - i]);
        rightArr.push(setRight.size);
    }

    var rightArrReversed = rightArr.reverse();

    return leftArr.filter((i, idx) => i === rightArrReversed[idx]).length;
};

console.log(numSplits('aacaba')); // 2
