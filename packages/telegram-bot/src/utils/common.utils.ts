export const convertCommandsToStringList = (commands: Record<string, string>) => {
    return (
        '\n' +
        Object.entries(commands).reduce((acc, [command, description]) => {
            return acc + command + ': ' + description + '\n';
        }, '')
    );
};

export function getRandomInteger(min = 0, max = 9) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor((max - min + 1) * Math.random() + min);
}

export function getRandomItemFromArray(arr: unknown[]) {
    return arr[getRandomInteger(0, arr.length - 1)];
}
