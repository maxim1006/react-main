// currying
/*********** Task ***********/
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

// currying2
/*********** Task ***********/
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

// Обход дерева / объекта
/*********** Task ***********/
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
//
//         if (obj?.a?.a) {
//             result += sum(obj.a);
//         }
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

// Обход дерева / объекта 2
/*********** Task ***********/
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

// Перетаскиваемый блок - написать drag&drop 100х100 пикселей.

// compose
/*********** Task ***********/
// var addOne = x => x + 1;
// var addTwo = x => x + 2;
//
// compose(addOne, addTwo)(0); // 3
/*********** Answer ***********/
// const compose = (...fns) => arg => fns.reduce((acc, item) => item(acc), arg);
