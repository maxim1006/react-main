function averagePair(arr, avg) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let curAvg = +((arr[start] + arr[end]) / 2).toFixed(1);

        if (curAvg === avg) return true;
        if (curAvg > avg) --end;
        if (curAvg < avg) ++start;
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
