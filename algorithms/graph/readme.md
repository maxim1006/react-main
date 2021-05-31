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
C помощью очереди, создаю очередь в начале состоящую из первых узлов, затем пока в очереди есть элемент бегу по очереди, проверяю есть ли в очереди нужный узел, откусываю первый элемент и его соседей вставляю в конец очереди, повторяю заново пока длинна очереди не равна 0;
проверить есть ли путь из точки а в точку g
проверяет есть ли путь, а также находит это за минимальное количество шагов

### Dijkstra’s algorithm
Для поиска кратчайшего пути в графе. В отличие от поиска в ширину в котором мы передвигаемся по вершинам графа и неважно длительный это путь или нет, то в алгоритме Дейкстры учитывается и длинна пройденного ребра (edges) (вес)

Нужны матрица с весами, пройденные вершины и соседи
Создаю матрицу с весами, нахожу вершину с мин весом (и проверкой что уже не проверял данную вершину), пока есть такая вершина нахожу ее соседей и обновляю в матрице для каждого соседа длинну ребра (Если длинна соседа из матрицы больше чем мин + текущая длинна соседа) то обновляю длинну;
пушу в проверенные и еще раз нахожу минимальную
