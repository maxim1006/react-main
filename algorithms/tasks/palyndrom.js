// aabbaa - true
// aabaB - false;
// aZazA - true;
function palindrom(str) {
    let lowercaseStr = str.toLowerCase();

    return (
        lowercaseStr ===
        lowercaseStr
            .split('')
            .reverse()
            .join('')
    );
}

console.log(palindrom('aabbaa'));
console.log(palindrom('aabaB'));
console.log(palindrom('aZazA'));
