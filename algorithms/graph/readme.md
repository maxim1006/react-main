Граф - абстрактная структура данных, представляющая из себя множество вершин и набор ребер (соединений между парами вершин) (пример, карта в которой города соеденены маршрутами)

Ребра бывают однонаправленными и двунаправленными

### undirected graph
we can go anywhere because there are no directions

### directed
Has directions where we can go from one node to another

Graphs have vertexes (nodes) with some type of value associated. Between vertexes there are edges (connector line) which also have value/weight (weighted graph)

Can  solve with 

**adjacency matrix**, add 1 row and 1 col for each node and add 1 in a cell where they intersect, drawback - quadratic complexity and time to insert anything

**adjacency list** - each item has its own array of neighbours, faster to iterate and more efficient in memory

To traverse graph can use DFS (depth first search) or BDF (breadth-first-search)

