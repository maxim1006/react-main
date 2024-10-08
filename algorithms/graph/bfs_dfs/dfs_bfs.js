const menuItems = [
    {
        link: 'link1',
        menuItems: [{ link: 'link11' }, { link: 'link12' }],
    },
    {
        link: 'link2',
        menuItems: [{ link: 'link21' }, { link: 'link22' }],
    },
];

function dfs(menuItems, val) {
    if (!menuItems) return false;

    for (let i of menuItems) {
        // тут вся соль в вызове функции dfs(i.menuItems, val если она вернет тру то вверх кака раз всплывет тру и второго пробега в L1 не будет так как на верхнем уровне на 1м пробеге сработает return
        if (val === i.link || dfs(i.menuItems, val)) return true; // dfs([{ link: 'link11' }, { link: 'link12' }], val) -> dfs(i.menuItems, val)
    }

    return false;
}

function bfs(menuItems, val) {
    let queue = [...menuItems];

    while (queue.length) {
        const cur = queue.shift();

        if (cur.link === val) return true;
        if (cur.menuItems) queue = [...cur.menuItems, ...queue];
    }

    return false;
}

console.log(dfs(menuItems, 'link22'));
console.log(bfs(menuItems, 'link21'));
