### prefix sum
Сумма префиксов — это метод, который можно использовать с целочисленными массивами. Идея состоит в том, чтобы создать префикс массива, где префикс [i] — это сумма всех элементов до индекса i (включительно). Например, если nums = [5, 2, 1, 6, 3, 8], у нас будет префикс = [5, 7, 8, 14, 17, 25].

pseudocode
```
// Given an integer array nums,
prefix = [nums[0]]
for i in [1, len(nums) - 1]:
prefix.append(nums[i] + prefix[prefix.length - 1])
```

Изначально мы начинаем только с первого элемента. Затем мы итерируем с i, начиная с индекса 1. В любой момент последний элемент префикса будет представлять сумму всех элементов во входных данных до индекса i, но не включая его. Таким образом, мы можем добавить это значение плюс текущее значение в конец префикса и перейти к следующему элементу.

Сумма префиксов — отличный инструмент, когда проблема связана с суммой подмассива. Это только стоит
O(n) для построения, но позволяет выполнять все будущие запросы к подмассиву.
O (1), поэтому обычно это может улучшить временную сложность алгоритма в O (n), где n — длина массива. 

