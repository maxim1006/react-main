const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    let nodes = graph[start];
    let found;

    while (nodes.length) {
        if (nodes.includes(end)) {
            found = true;
            console.log('found ', end);
            return;
        }

        let node = nodes.shift();

        if (!Array.isArray(graph[node])) {
            graph[node] = [];
        }

        nodes = [...graph[node], ...nodes];
    }

    console.log('oops nothing was found');
    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
