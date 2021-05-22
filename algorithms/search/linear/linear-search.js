const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

count = 0; // number of iterations

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        ++count;
        if (item === array[i]) {
            return i;
        }
    }

    return null;
}

console.log(linearSearch(array, 4), `count: ${count}`); // complexity O(n)
