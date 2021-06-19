const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const MAX_INT = 100000000;

function shortPath(graph, start, end) {
    let costs = {};
    let visited = new Set();

    Object.keys(graph).forEach(key => {
        if (key !== start) {
            costs[key] = graph[start][key] || MAX_INT;
        }
    });

    let lowestNode = findLowestNode(costs, visited);

    while (lowestNode) {
        let neighbors = graph[lowestNode];

        Object.keys(neighbors).forEach(neighbor => {
            if (costs[neighbor] > costs[lowestNode] + neighbors[neighbor]) {
                costs[neighbor] = costs[lowestNode] + neighbors[neighbor];
            }
        });

        visited.add(lowestNode);

        lowestNode = findLowestNode(costs, visited);
    }

    return costs;
}

console.log(shortPath(graph, 'a', 'g')); // { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }

function findLowestNode(costs, visited) {
    let lowestValue = MAX_INT;
    let lowestNode;

    Object.keys(costs).forEach(key => {
        if (costs[key] < lowestValue && !visited.has(key)) {
            lowestValue = costs[key];
            lowestNode = key;
        }
    });

    return lowestNode;
}
