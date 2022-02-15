import { memo, useEffect } from 'react';
import './array.component.scss';
import './array-prettify.component.scss';

const ArrayComponent = memo(() => {
    useEffect(() => {
        window.PR && window.PR.prettyPrint();
    }, []);

    return (
        <div className='array'>
            <h4 className='array__title'>Создание массивов</h4>

            <pre className='prettyprint lang-js'>
                {`При создании массива не могу итерироавться так как только проперти length
                let arr = Array(3);
                При создании массива могу итерироавться
                let arr1 = Array(1,2,3);

                console.log(Object.getOwnPropertyNames(arr)); // ["length"]
                console.log(Object.getOwnPropertyNames(arr1)); // ["0", "1", "2", "length"]
                `}
            </pre>

            <h4 className='array__title'>Fill</h4>
            <pre className='prettyprint lang-js'>
                {`let arr = Array(3);
                arr.fill(1); // [1, 1, 1]
               `}
            </pre>

            <h4 className='array__title'>From</h4>
            <pre className='prettyprint lang-js'>
                {`Array.from(Array(3), (iem, index) => index); // [0, 1, 2]

                Array.from({length: 3}, (iem, index) => index); // [0, 1, 2]
                `}
            </pre>

            <h4 className='array__title'>Of</h4>
            <pre className='prettyprint lang-js'>
                {`var array1 = Array.of(5); // [5]
                var array2 = Array(5); // Array(5) {length: 5}
                `}
            </pre>
        </div>
    );
});

export default ArrayComponent;
