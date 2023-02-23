### two pointers 
time: O(n), space: O(1)
1. Начните один указатель с первого индекса 0, а другой указатель с последнего индекса input.length - 1.
2. Используйте цикл while, пока указатели не сравняются друг с другом.
3. На каждой итерации цикла перемещайте указатели друг к другу. Это означает либо увеличение указателя, начинающегося с первого индекса, либо уменьшение указателя, начинающегося с последнего индекса, либо и то, и другое. Решение о том, какие указатели перемещать, будет зависеть от проблемы, которую мы пытаемся решить.

pseudocode
```
function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--
```

### two pointers two iterables in the input
time: O(n+m) на 2 массива n + m, space: O(1)
1. Создайте два указателя, по одному для каждого итерируемого объекта. Каждый указатель должен начинаться с первого индекса.
2. Используйте цикл while, пока один из указателей не достигнет конца своей итерации.
3. На каждой итерации цикла перемещайте указатели вперед. Это означает увеличение либо одного из указателей, либо обоих указателей. Решение о том, какие указатели перемещать, будет зависеть от проблемы, которую мы пытаемся решить.
4. Поскольку наш цикл while остановится, когда один из указателей достигнет конца, другой указатель не будет в конце, когда цикл завершится. Иногда нам нужно выполнить итерацию по всем элементам — в этом случае вам нужно будет написать здесь дополнительный код, чтобы убедиться, что обе итерации исчерпаны.

pseudocode
```
function fn(arr1, arr2):
    i = j = 0
    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
```
