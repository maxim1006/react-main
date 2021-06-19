// Part1 Represent graph, undirected, not weighted, no cycles
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

// the graph adjacency
const adjacencyList = new Map();

// first add node to graph
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// console.log({ adjacencyList });
// {
//     'PHX' => [ 'LAX', 'JFK' ],
//     'BKK' => [ 'MEX', 'LIM' ],
//     'OKC' => [ 'JFK' ],
//     'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
//     'LAX' => [ 'PHX', 'MEX' ],
//     'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
//     'EZE' => [ 'MEX' ],
//     'HEL' => [ 'JFK' ],
//     'LOS' => [ 'JFK' ],
//     'LAP' => [],
//     'LIM' => [ 'MEX', 'BKK' ]
// }

// Part 2 Graph Search or Traversal, if there is a route between PHX and BKK
// can do with DFS, BFS,
//
// do with dfs
// const BKK = 'BKK';
// function dfs(start, visited = new Set()) {
//     visited.add(start);
//
//     let canFly = false;
//     let nodes = adjacencyList.get(start);
//
//     if (!nodes || nodes.length === 0) {
//         return false;
//     }
//
//     console.log({ start, nodes, visited });
//
//     for (let key of nodes) {
//         if (key === BKK) {
//             canFly = true;
//             return true;
//         }
//
//         if (!visited.has(key)) {
//             canFly = dfs(key, visited);
//
//             if (canFly) return canFly;
//         }
//     }
//
//     return canFly;
// }
//
// console.log(dfs('PHX'));

// do with bfs
// const BKK = 'BKK';
// function bfs(start, visited = new Set()) {
//     let canFly = false;
//
//     const queue = [start];
//
//     while (queue.length) {
//         const airport = queue.shift();
//         let nodes = adjacencyList.get(airport);
//         visited.add(airport);
//
//         for (const node of nodes) {
//             if (node === BKK) {
//                 canFly = true;
//                 console.log("found in ", node);
//                 return canFly;
//             }
//
//             if (!visited.has(node)) {
//                 queue.push(node);
//             }
//         }
//
//         console.log({ start, queue, visited });
//     }
//
//     return canFly;
// }
//
// console.log(bfs('PHX'));

// Time complexity for the algorithms bfs, dfs is O(vertexes + edges) (big O notation), therefore the time is O(n), linear
