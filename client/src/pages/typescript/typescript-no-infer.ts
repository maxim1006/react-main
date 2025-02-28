// @ts-ignore
// type NoInfer<T> = [T][T extends any ? 0 : never];

function strictValue<T>(value: NoInfer<T>, callback: (arg: T) => void) {
    callback(value);
}

// Пример использования:
// без NoInfer отработает а с ним x unknown - сейчас ts и так все понимает
// strictValue('hello', x => console.log(x.toUpperCase())); // Работает, x строго string
// strictValue(42, x => console.log(x * 2)); // Работает, x строго number

// Ошибка, если типы не совпадают:
// strictValue('hello', (x: number) => console.log(x * 2)); // Ошибка компиляции
