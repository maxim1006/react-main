/*********** Task currying ***********/
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log(curriedSum(1, 2, 3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
// console.log(curriedSum(1)(2)(3)); // 6
/*********** Answer ***********/
// function curry(f) {
//     return function curried(...args) {
//         if (args.length >= f.length) {
//             return f.apply(this, args);
//         } else {
//             return function pass(...args2) {
//                 return curried.apply(this, args.concat(args2));
//             };
//         }
//     };
// }

/*********** Task currying2 ***********/
// console.log(sum(0)(1)(2)(3)(4)(5));
/*********** Answer ***********/
// function sum(num) {
//     let currentSum = num;
//
//     function f(current) {
//         currentSum += current;
//         return f;
//     }
//
//     f.toString = () => currentSum;
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
// function sum(obj) {
//     let result = 0;
//
//     if (obj?.a?.num) {
//         result += obj.a.num;
//     }
//
//     if (obj?.a?.a) {
//         result += sum(obj.a);
//     }
//
//     return result;
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
// function get(obj, path) {
//     let arr = path.split('.');
//
//     let result;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             return;
//         }
//
//         obj = obj[arr[i]];
//     }
//
//     return obj;
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
// function RLE2(str) {
//     let counter = 1;
//     let length = str.length;
//     let result = '';
//
//     for (let i = 0; i < length; i++) {
//         if (i + 1 === length) break;
//
//         if (str[i + 1] !== str[i]) {
//             result += counter > 1 ? str[i] + counter : str[i];
//             counter = 1;
//         } else {
//             ++counter;
//         }
//     }
//
//     result += counter > 1 ? str[length - 1] + counter : str[length - 1];
//
//     return result;
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
//     let length = sorted.length;
//     let temp = sorted[0];
//     let result = [];
//
//     for (let i = 1; i < length; i++) {
//         let current = sorted[i];
//
//         if (temp[1] + 1 >= current[0]) {
//             temp = [temp[0], Math.max(temp[1], current[1])];
//         } else {
//             result.push(temp);
//             temp = current;
//
//             if (i === length - 1) result.push(temp);
//         }
//     }
//
//     return result;
// }
//
// console.log(convert(input));

/*********** Task ***********/
// console.log(compress([1, 4, 5, 2, 3, 9, 18, 8, 11, 0])); // '0-5,8-9,11,18' [1,2,3,4,5,8,9,11,18]
// console.log(compress([1, 4, 3, 2])); // '1-4'
// console.log(compress([1, 4])); // '1,4'
/*********** Answer ***********/
// function compress(arr) {
//     let sorted = arr.sort((a, b) => a - b); // [1,4]
//     let length = sorted.length;
//     let prev = sorted[0];
//     let result = '';
//     let counter = 0;
//
//     for (let i = 1; i < length; i++) {
//         if (arr[i] - prev > 1) {
//             result += counter ? `-${prev}` : `,${prev}`;
//             counter = 0;
//         } else {
//             if (counter === 0) {
//                 result += `,${prev}`;
//             }
//
//             ++counter;
//         }
//
//         prev = arr[i];
//     }
//
//     result += counter ? `-${prev}` : `,${prev}`;
//
//     return result.slice(1);
// }
// function compress(arr) {
//     let sorted = arr.sort((a, b) => a - b); // [1,4]
//     let length = sorted.length;
//     let result = '';
//     let counter = 0;
//
//     for (let i = 0; i < length; i++) {
//         if (i + 1 === length) break;
//
//         if (arr[i + 1] - arr[i] > 1) {
//             result += counter ? `-${arr[i]}` : `,${arr[i]}`;
//             counter = 0;
//         } else {
//             if (counter === 0) {
//                 result += `,${arr[i]}`;
//             }
//
//             ++counter;
//         }
//     }
//
//     result += counter ? `-${arr[length - 1]}` : `,${arr[length - 1]}`;
//
//     return result.slice(1);
// }

/*********** Task ***********/
// let str = 'a.b.c.d.e.f'; // {a: {b: { c: {d: {e: {f:{}}}}}}}
/*********** Answer ***********/
// function convert(str) {
//     let arr = str.split('.');
//     let obj = { [arr[0]]: {} };
//     let temp = obj[arr[0]];
//
//     for (let i = 1; i < arr.length; i++) {
//         console.log(temp);
//         if (i + 1 < arr.length) {
//             temp[arr[i]] = { [arr[i + 1]]: {} };
//             temp = temp[arr[i]];
//         }
//     }
//
//     return obj;
// }
//
// console.log(JSON.stringify(convert(str)));
