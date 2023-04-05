// enum ColorsEnum {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue',
// }
//
// const palette = {
//     [ColorsEnum.Red]: '1',
//     [ColorsEnum.Green]: ['1', '1'],
//     [ColorsEnum.Blue]: '1',
// } satisfies Record<ColorsEnum, string | [red: string, green: string]>;
//
// const color = palette[ColorsEnum.Green].forEach(i => i);
// // const color1 = palette[ColorsEnum.Red].forEach(i => i); // ошибка
// const color2 = palette[ColorsEnum.Red].toLocaleLowerCase();

export {};
