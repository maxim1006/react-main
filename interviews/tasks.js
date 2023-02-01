/*********** Task currying ***********/
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);
let curriedSum1 = curry(sum);
let curriedSum2 = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum1(1)(2, 3)); // 6
console.log(curriedSum2(1)(2)(3)); // 6
/*********** Answer ***********/
function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function pass(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

/*********** Task currying2 ***********/
// console.log(sum(0)(1)(2)(3)(4)(5) + "");
/*********** Answer ***********/
// function sum(num) {
//     let currentSum = num;
//
//     function f(current) {
//         currentSum += current;
//         return f;
//     }
//
//     f.toString = function () {
//         return currentSum;
//     };
//
//     return f;
// }

/*********** Task Обход дерева / объекта ***********/
// const obj = {
//     a: {
//         num: 1,
//         a: {
//             num: 2,
//             a: {
//                 num: 3,
//                 a: {
//                     num: 4,
//                 },
//             },
//         },
//     },
// };
/*********** Answer ***********/
// 1
// function sum(obj, res = 0) {
//     if (!obj.a) return res;
//
//     return obj.a.num + sum(obj.a);
// }

// 2
// function sum(obj) {
//     let result = 0;
//
//     while(obj.a) {
//         result += obj.a.num;
//         obj = obj.a;
//     }
//
//     return result;
// }

// 3
// function sum(obj = {}, res = 0) {
//     return obj.a ? res += obj.a.num + sum(obj.a, res) : 0;
// }

/*********** Task Обход дерева / объекта 2 ***********/
// const obj = {
//     a: {
//         b: {
//             c: 'd',
//         },
//         e: 'f',
//     },
// };
//
// console.log(get(obj, 'a.b')); // { c : 'd' }
// console.log(get(obj, 'a.b.c')); // 'd'
// console.log(get(obj, 'a.e')); // 'f'
// console.log(get(obj, 'a.x.e')); // undefined
/*********** Answer ***********/
// 1
// function get(obj, str) {
//     const arr = str.split(".");
//     let res = obj;
//
//     for (let i of arr) {
//         res = res?.[i];
//     }
//
//     return res;
// }

// 2
// function get(obj, str) {
//     return str.split(".").reduce((acc, i) => acc?.[i], obj)
// }

/*********** Task Перетаскиваемый блок - написать drag&drop 100х100 пикселей. ***********/

/*********** Task compose ***********/
// var addOne = x => x + 1;
// var addTwo = x => x + 2;
//
// compose(addOne, addTwo)(0); // 3
/*********** Answer ***********/
// const compose = (...fns) => arg => fns.reduce((acc, item) => item(acc), arg);

/*********** Task recursion ***********/
// function sumTo(n) {
//     /*... ваш код ... */
// }
// console.log(sumTo(100)); // 5050
/*********** Answer ***********/
// function sumTo(n) {
//     if (!n) return 0;
//
//     return n + sumTo(--n);
// }

/*********** Task factorial ***********/
// function factorial(n) {/*... ваш код ... */}
// console.log('factorial ', factorial(5)); // 1*2*3*4*5 = 120
// function factorial(n, res = 1) {
//     if (n === 1) return res;
//
//     return n * factorial(--n);
// }

/*********** Task Fibonacci ***********/
// Fibonacci - каждое последующее число равно сумме двух предыдущих 0,1,1,2,3,5,8,13,21
// f(n) = f(n-1) + f(n-2)
// function fibonacci(n) {/*... ваш код ... */}
// console.log(fibonacci(8)); // 21

/*********** Task RLE ***********/
// Дана строка, состоящая из букв A-Z:
// AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
//
// Нужно написать функцию RLE, которая на выходе даст строку вида:
//     A4B3C2XYZD4E3F3A6B28
//
// И сгенерирует ошибку, если на вход пришла невалидная строка.
//     Пояснения:
// Если символ встречается 1 раз, он остается без изменений;
// Если символ повторяется более 1 раза, к нему добавляется количество повторений.
// console.log(RLE('ABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')); // "AB3C2XYZD4E3F3A6B28"
/*********** Answer ***********/
// Создал prev = первый элемент, резалт пустой (так как не знаю как в него нужно положить prev) а дальше пишу условия как положить prev в резалт итерируясь с 1 позиции
// function RLE(str) {
//     let counter = 1;
//     let result = '';
//     let prev = str[0];
//     let length = str.length;
//
//     for (let i = 1; i < length; i++) {
//         if (str[i] !== prev) {
//             result += counter > 1 ? prev + counter : prev;
//             prev = str[i];
//             counter = 1;
//         } else {
//             ++counter;
//         }
//     }
//
//     result += counter > 1 ? prev + counter : prev;
//
//     return result;
// }

// через next решение более лаконичное
// function RLE(str) {
//     let res = "";
//     let count = 1;
//
//     for (let i = 0; i < str.length; i++) {
//         let cur = str[i];
//         let next = str[i+1];
//
//         if (cur === next) {
//             ++count;
//         } else {
//             res += cur + (count > 1 ? count : "");
//             count = 1;
//         }
//     }
//
//     return res;
// }

/*********** Task Дан набор отрезков - пожалуйста напишите функцию convert() которая объеденяет вхождения ***********/
// const input = [
//     [1, 3],
//     [12, 16],
//     [9, 15],
//     [4, 4],
//     [18, 18],
//     [8, 11],
// ];
//
// =>
//
// const output = [
//     [ 1,   4 ]
//     [ 8,  16 ]
//     [ 18, 18 ]
// ]
/*********** Answer ***********/
// function convert(input) {
//     let sorted = input.sort((a, b) => a[0] - b[0]);
//     let res = [];
//     let prev = sorted[0];
//
//     for (let i = 1, l = sorted.length; i < l; i++) {
//         let cur = sorted[i];
//
//         if (cur[0] > prev[1] + 1) {
//             res.push(prev);
//             prev = cur;
//         } else {
//             prev = [prev[0], Math.max(prev[1], cur[1])];
//         }
//     }
//
//     res.push(prev);
//
//     return res;
// }
//
// console.log(convert(input));

/*********** Task ***********/
// console.log(compress([1, 4, 5, 2, 3, 9, 18, 8, 11, 0])); // '0-5,8-9,11,18' [1,2,3,4,5,8,9,11,18]
// console.log(compress([1, 4, 3, 2])); // '1-4'
// console.log(compress([1, 4])); // '1,4'
/*********** Answer ***********/
// Создал prev = первый элемент, резалт пустой (так как не знаю как в него нужно положить prev) а дальше пишу условия как положить prev в резалт итерируясь с 1 позиции
// function compress(arr) {
//     let sorted = arr.sort((a, b) => a - b);
//     let prev = arr[0];
//     let start = prev;
//     let result = '';
//
//     for (let i = 1; i < sorted.length; i++) {
//         let current = sorted[i];
//
//         if (current - prev > 1) {
//             result += prev === start ? `,${prev}` : `,${start}-${prev}`;
//             start = current;
//         }
//
//         prev = current;
//     }
//
//     result += prev === start ? `,${prev}` : `,${start}-${prev}`;
//
//     return result.slice(1);
// }

/*********** Task ***********/
// let str = 'a.b.c.d.e.f'; // {a: {b: { c: {d: {e: {f:{}}}}}}}
/*********** Answer ***********/
// function convert(str) {
//     const arr = str.split('.');
//     let obj = {};
//
//     arr.reduce((acc, item) => {
//         acc[item] = {};
//         return acc[item];
//     }, obj);
//
//     return obj;
// }
//
// console.log(JSON.stringify(convert(str)));

/**
 * Необходимо написать функцию, которая на вход принимает урл,
 * асинхронно ходит по этому урлу GET запросом и возвращает данные (json).
 * Для получении данных можно использовать $.get или fetch.
 * Если во время запроса произошла ошибка, то пробовать запросить ещё 5 раз.
 * Если в итоге информацию получить не удалось, вернуть ошибку "Заданный URL недоступен".
 */
// function get(url) {
//     return privateGet(url, 0);
// }
//
// function privateGet(url, attempt){
//     return fetch(url).catch(()=>{
//         if (attempt === 5) {
//             throw "Заданный URL недоступен";
//         } else {
//             return privateGet(url, attempt+1);
//         }
//     });
// }
//
// get(url)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

///////////////////////////////////////////////////////////////////// Task
// const promises = [
//     delay(50).then(() => 42),
//     delay(75).then(() => { throw 'nope'; })
// ];
//
// function getResult(promises) {
//     return Promise.all(promises.map((promise)=>{
//         return promise.then((v) => {
//             return {status: "resolved", "value": v};
//         }).catch((e)=>{
//             return {"status": "rejected", "value": e};
//         })
//     }));
//     // return Promise.resolve([{"status": "resolved", "value": 42}, {"status": "rejected", "reason": "nope"}]);
// }

// function getResult(promises) {
//     return Promise.all(
//         promises.map(async item => {
//             try {
//                 const value = await item;
//                 return { status: "resolved", value };
//             } catch (e) {
//                 return { status: "rejected", reason: e };
//             }
//         })
//     );
//     // return Promise.resolve([{"status": "resolved", "value": 42}, {"status": "rejected", "reason": "nope"}]);
// }
// const getResult = promises =>
//     Promise.all(
//         promises.map(item =>
//             item.then(
//                 value => ({ status: "resolved", value }),
//                 e => ({ status: "rejected", reason: e })
//             )
//         )
//     );
//
// getResult(promises).then((e) => console.log(e));
///////////////////////////////////////////////////////////////////// End

// convert to an object
// const arr = [
//     {name: 'width', value: 10},
//     {name: 'height', value: 20}
// ];
// На выходе объект {width: 10, height: 20}

///////////////////////////////////////////////////////////////////// Task
// optimise filtering
// let items = [
//     { name: 'name 1', age: '2323' },
//     { name: 'name 2', age: '2323' },
// ];
// let excludeFilters = [{ k: 'name', v: 'name 1' }];
//
// const notOptimised = () =>
//     items.filter(item => {
//         let { v, k } = excludeFilters.find(f => Object.keys(item).find(key => f.k === key));
//
//         return v !== item[k];
//     });
//
// console.time('notOptimised');
// console.log(notOptimised());
// console.timeEnd('notOptimised');
//
// let excludeFiltersMap = excludeFilters.reduce((acc, { k, v }) => {
//     acc[k] = { [v]: true };
//
//     return acc;
// }, {});
// console.log({ excludeFiltersMap }); // { name: { 'name 1': true } } }
//
// const optimised = () => items.filter(item => !Object.keys(item).find(key => excludeFiltersMap[key]?.[item[key]]));
//
// console.time('optimised');
// console.log(optimised());
// console.timeEnd('optimised');
///////////////////////////////////////////////////////////////////// End

///////////////////////////////////////////////////////////////////// Task
// let o = { Max: [1, 1], Alice: [2, 6], Bob: [3, 8], Catie: [4, 7] };
//
// function countCollisions(o) {
//     let res = {};
//     let intervals = getIntervals(o);
//
//     for (let interval of intervals) res[interval] = findIntersections(interval, o);
//
//     return res;
// }
//
// function getIntervals(o) {
//     return Object.values(o)
//         .flatMap(i => i)
//         .sort((a, b) => a - b)
//         .reduce((acc, i, idx, arr) => {
//             let next = arr[idx + 1];
//
//             if (next) acc.push([i, next]);
//
//             return acc;
//         }, []);
// }
//
// function findIntersections(interval, o) {
//     return Object.keys(o).filter(key => {
//         let value = o[key];
//
//         return (
//             (value[0] < interval[1] && value[1] > interval[0]) ||
//             (value[0] === interval[0] && value[1] === interval[1])
//         );
//     });
// }
//
// console.log(countCollisions(o)); // {"1,1":["Max"],"2,3":["Alice"],"3,4":["Alice","Bob"],"4,6":["Alice","Bob","Catie"],"6,7":["Bob","Catie"],"7,8":["Bob"]}
///////////////////////////////////////////////////////////////////// End

///////////////////////////////////////////////////////////////////// Task
// requestAnimationFrame(() => console.log('raf'));
//
// Promise.resolve('resolve').then(a => console.log(a));
//
// setTimeout(() => console.log('setTimeout'), 0);
//
// console.log(1);
//
// // Последовательность:
// // 1 // консоль лог
// // resolve // промис
// // 4 // id сеттаймаута
// // raf // отработает requestAnimationFrame
// // setTimeout // отработает таймаут
///////////////////////////////////////////////////////////////////// End
