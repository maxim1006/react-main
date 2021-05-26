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
    const costs = {};
    let neighbours = {};
    const processed = [];

    Object.keys(graph).forEach(key => {
        if (key !== start) {
            let value = graph[start][key];

            costs[key] = value || MAX_INT;
        }
    });

    let lowestNode = findNodeWithLowestCost(costs, processed);

    while (lowestNode) {
        neighbours = graph[lowestNode];

        Object.keys(neighbours).forEach(neighbour => {
            let newCost = costs[lowestNode] + neighbours[neighbour];

            if (newCost < costs[neighbour]) {
                costs[neighbour] = newCost;
            }
        });

        processed.push(lowestNode);
        lowestNode = findNodeWithLowestCost(costs, processed);
    }

    return costs;
}

console.log(shortPath(graph, 'a', 'g'));

function findNodeWithLowestCost(costs, processed) {
    let lowestKey;
    let lowestValue = MAX_INT;

    Object.keys(costs).forEach(key => {
        let cost = costs[key];
        if (cost < lowestValue && !processed.includes(key)) {
            lowestValue = cost;
            lowestKey = key;
        }
    });

    return lowestKey;
}
