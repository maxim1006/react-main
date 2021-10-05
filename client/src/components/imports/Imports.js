import React from 'react';

export default function Imports() {
    const getData = async () => {
        const data = await import('./data.js');
        console.log(data.default);
    };

    return (
        <>
            "Example of dynamic imports from files"
            <div onClick={getData}>Get data</div>
        </>
    );
}

(async () => {
    const data = await require('./data.js');
    console.log('data from dynamic import ', data);
})();
