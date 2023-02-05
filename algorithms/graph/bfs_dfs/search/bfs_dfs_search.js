// Поиск в ширину (англ. breadth-first search, BFS)
// проверить есть ли путь из точки а в точку g
// проверяет есть ли путь, а также находит это за минимальное количество шагов
const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function bfs(graph, start, end) {
    let queue = graph[start].slice();

    while (queue.length) {
        let current = queue.shift();

        console.log('bfs', current);

        if (current === end) return true;

        queue = [...queue, ...graph[current]];
    }

    console.log('nothing was found ');
    return false;
}

function dfs(graph, start, end) {
    for (let i of graph[start]) {
        console.log('dfs', i);
        if (end === i || dfs(graph, i, end)) return true;
    }

    return false;
}

console.log(bfs(graph, 'a', 'g')); // true
console.log(dfs(graph, 'a', 'g')); // true
