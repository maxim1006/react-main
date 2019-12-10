export const generateUniqueId = () => {
    return  getRandomSymbols4() +  getRandomSymbols4() + "-" +  getRandomSymbols4();
};

export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

// Helpers
function getRandomSymbols4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
