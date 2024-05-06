let data = {
    products: [
        {
            type: '1',
            products: [
                {
                    type: '2',
                },
                {
                    type: '3',
                },
            ],
        },
        {
            type: '4',
        },
    ],
};

function getType(data, type) {
    if (!data.products?.length) return false;

    for (let product of data.products) {
        if (product.type === type || getType(product, type)) return true;
    }

    return false;
}

console.log(getType(data, '4')); // true
console.log(getType(data, '5')); // false
