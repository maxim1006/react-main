import React, { memo } from 'react';

type ProConsoleProps = {};

const ProConsole = memo<ProConsoleProps>(() => {
    // default console
    const foo = { foo: 1 };
    const bar = { bar: 1 };
    const baz = { baz: 1 };
    console.log({ foo, bar, baz });

    // вывожу как таблицу так как очень удобно для массива с объектами
    console.table([foo, bar, baz]);

    // styled console.log !!!
    console.log('%c Colored console', 'color: orange; font-weight: bold');

    // loop
    console.time('loop');
    let i = 0;
    while (i < 100000) {
        i++;
    }
    console.timeEnd('loop');

    // trace
    console.trace('The place where the function was triggeres with stack');

    // string literal functions
    function getHorseInfo(name: string | TemplateStringsArray, age: string) {
        console.log({ name, age });
        return `name: ${Array.isArray(name) ? name[0] : name}; age: ${age}`;
    }

    console.log(getHorseInfo('horsy 1', '3'));
    // прикольно что то что передаю в ${'2'} будет являться вторым, третьим и тд аргументом, а первый будет массив
    console.log(getHorseInfo`horsy 2${'2'}`);

    return <>ProConsole</>;
});

export default ProConsole;
