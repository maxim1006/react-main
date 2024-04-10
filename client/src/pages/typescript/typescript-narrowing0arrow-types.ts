// typescript не понимает filter результат - поэтому надо подсказать что в итоге останется после фильтрации

const list: Array<number | string> = [1, 'two', 3, 'four'];

const numbers = list.filter((val): val is number => typeof val === 'number');

// если уберу thing is string и наведу на strings то тип будет (string | number)[]
const strings = list.filter((val): val is string => typeof val === 'string');
