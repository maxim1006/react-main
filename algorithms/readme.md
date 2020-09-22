### O
On the order of - the worst case scenario of algorithm. В процессе его вычислений достаточно много допущений, к примеру n^2 + 2n + 1 === O(n^2), или n - 1 === O(n)

### Ω (omega)
Best case scenario (omega of 1 - linear search)

### linear search
O(n) (On the order of n - efficiency of the algorithm )

Причем на бесконечном пространстве O(n) === O(n/2) (когда 2 числа за 1 раз например ищем) === O(n)

### binary search
делением попалам
O(log n)

сложность поиска по отсортированному массиву быстрее чем за линецное время:
O(log n)

### Most common running times:
O(n^2) - bubble sort, selection sort
O(n log n) - merge sort
O(n) - linear search
O(log n) - binary search (на отсортированном массиве)
O(1)

Ω(n^2) - bubble sort (без условия что если swap = false остановись), selection sort
Ω(n log n) - merge sort
Ω(n) - bubble sort (c условием что если swap = false, те прошли один раз по массиву и ничего не поменяли, это индикатор чтобы остановить сортировку)
Ω(log n) 
Ω(1) - linear search, binary search

### bubble sort - O(n^2)
сортировка пузырьком (всплывает максимальный вправо, сравнивается если больше чем правый - всплывай)

### selection sort - O(n^2)
Пробегаю по массиву, нахожу минимальный, затем вставляю это значение в начало, а то что было в начале ставлю
на место найденного минимального значения. Дальше делаю тоже самое и найденное значение ставлю на позицию 2, и тд

### merge sort - O(n log n)
if only one item
    return
Else
   sort left half of items 
   sort right half of items 
   merge sorted halves (взять минимальный элемент из списка который был разделен с помощью мерж сорта (а мы делили на списки минимальных размеров к примеру лист из 8 элементов поделили на 8 листов с размером 1) и поставить перед большим списком и смержить)