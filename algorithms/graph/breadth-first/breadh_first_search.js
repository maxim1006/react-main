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

// with for
// function breadthSearch(graph, start, end) {
//     let paths = graph[start];
//
//     while (paths.length) {
//         console.log('paths ', paths);
//         let currentPaths = [];
//
//         for (let path of paths) {
//             if (end === path) {
//                 console.log('found path: ', end);
//                 return true;
//             }
//
//             if (Array.isArray(graph[path])) {
//                 currentPaths = [...currentPaths, ...graph[path]];
//             }
//         }
//
//         paths = currentPaths;
//     }
//
//     console.log('no destination was found');
//     return false;
// }

// without for
function breadthSearch(graph, start, end) {
    let queue = graph[start];

    while (queue.length) {
        console.log(queue);

        if (queue.includes(end)) {
            console.log('found: ', end);
            return true;
        }

        let current = queue.shift();

        if (!graph[current] || !Array.isArray(graph[current])) {
            graph[current] = [];
        }

        queue = [...queue, ...graph[current]];
    }

    console.log('nothing was found ');
    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
