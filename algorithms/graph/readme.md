Граф - абстрактная структура данных, представляющая из себя множество вершин (vertexes (nodes)) и набор ребер (edges (connector line)) (соединений между парами вершин) (пример, карта в которой города соеденены маршрутами)

Ребра бывают однонаправленными и двунаправленными

### undirected graph
we can go anywhere because there are no directions

### directed
Has directions where we can go from one node to another

Graphs have vertexes (nodes) with some type of value associated. Between vertexes there are edges (connector line) which also have value/weight (weighted graph)

Can  solve with 

### adjacency matrix, 
add 1 row and 1 col for each node and add 1 in a cell where they intersect, drawback - quadratic complexity and time to insert anything
Матрица смежности - составляется табличка где строки это вершины и если путь из одной вершины в другую есть то на их перекрестии ставим 1, если пути нет то ставим 0
// Матрица смежности

const matrix = [
    [0,1,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
]

### adjacency list
each item has its own array of neighbours, faster to iterate and more efficient in memory

To traverse graph can use DFS (depth first search) or BDF (breadth-first-search)

### breadth-first-search
Поиск в ширину (англ. breadth-first search, BFS)
проверить есть ли путь из точки а в точку g
проверяет есть ли путь, а также находит это за минимальное количество шагов

### Dijkstra’s algorithm
Для поиска кратчайшего пути в графе. В отличие от поиска в ширину в котором мы передвигаемся по вершинам графа и неважно длительный это путь или нет, то в алгоритме Дейкстры учитывается и длинна пройденного ребра (edges) (вес)
