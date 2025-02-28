// {} vs object

// это валидно так как {} это все кроме null и undefined
const a: {} = 'string';

type Test<T extends {}> = T;
type Test1<T extends object> = T;

const b: Test<string> = 'string';

/**
в Test1<string> будет ошибка так как
<T extends object>
Более строгое ограничение.
Исключает примитивные типы.
Гарантирует, что T будет объектом.
*/
const b1: Test1<object> = {};
