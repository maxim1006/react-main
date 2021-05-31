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
    const costs = {}; // table with shortest paths
    const processed = []; // vertexes that we already checked
    let neighbors = {}; // neighbors vertexes of current vertex

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            // start node shouldnt be in table
            let value = graph[start][node];
            // if there is a pth from start to node set value otherwise set big int
            costs[node] = value || MAX_INT;
        }
    });

    // найти вершину в которую можем попасть из точки а и путь в которую самый короткий путь
    let lowestNode = findLowestCost(costs, processed);

    while (lowestNode) {
        // пока не обойдем весь граф будем считать ноды с минимальной стоимостью
        // на каждой итерации получаем стоимость текущей вершины
        const cost = costs[lowestNode];
        // и узлы в которые могу попасть из этой ноды
        neighbors = graph[lowestNode];

        // пробегаюсь по соседним узлам
        Object.keys(neighbors).forEach(neighbor => {
            // нахожу текущую стоимость текущей вершины и вершины соседа
            let newCost = cost + neighbors[neighbor];
            // если новая стоимость меньше чем в табличке для этого узла, то эту стоимость нужно переписать
            // так итеративно перепишу всех соседей
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });

        // вершину которую проверили и у которой проверили соседей запоминаем
        processed.push(lowestNode);
        lowestNode = findLowestCost(costs, processed);
        // console.log(lowestNode);
        // console.log({ costs });
    }
    // console.log({ processed });

    // объект который хранит кратчайшие пути
    return costs;
}

console.log(shortPath(graph, 'a', 'g')); // { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }

// helpers
function findLowestCost(costs, processed) {
    let lowestCost = MAX_INT;
    let lowestNode;

    Object.keys(costs).forEach(node => {
        let cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}
